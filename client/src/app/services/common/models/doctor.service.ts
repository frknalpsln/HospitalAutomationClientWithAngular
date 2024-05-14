import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateDoctor } from '../../../contracts/create-doctor';
import { HttpErrorResponse } from '@angular/common/http';
import { ListDoctor } from '../../../contracts/list-doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClientService) { }

  create(createDoctor: CreateDoctor, succesCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClient.post({
      controller: "doctors",
    },
      createDoctor
    ).subscribe(result => {
      succesCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    })
  }

  async read(page: number = 0, size: number = 5, succesCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; doctors: ListDoctor[] }> {
    {
      const promiseData: Promise<{ totalCount: number; doctors: ListDoctor[] }> = this.httpClient.get<{ totalCount: number; doctors: ListDoctor[] }>({
        controller: `doctors`,
        queryString: `page= ${page}&size=${size}`
      }).toPromise();

      promiseData.then(d => succesCallBack())
        .catch((errorRespone: HttpErrorResponse) => errorCallBack(errorRespone.message))

      return await promiseData;

    }
  }
}