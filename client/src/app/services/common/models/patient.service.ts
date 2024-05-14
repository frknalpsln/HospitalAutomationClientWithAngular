import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreatePatient } from '../../../contracts/create-patient';
import { HttpErrorResponse } from '@angular/common/http';
import { ListPatient } from '../../../contracts/list-patient';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClientService: HttpClientService) { }


  create(patient: CreatePatient, 
    succesCallBack?:  () => void,
     errorCallBack?:  (errorMessage : string) => void) {
    this.httpClientService.post({
      controller: "patients"
    },
      patient,
    ).subscribe(result => {
      succesCallBack();
    }, (errorResponse : HttpErrorResponse) => {
      const _error : Array<{key : string , value : Array<string>}> = errorResponse.error;
      let message = "";
      _error.forEach((v , index) => {
        v.value.forEach((_v , _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    })
  }

  async read(page : number = 0 , size : number = 5 , succesCallBack? : () => void, errorCallBack? : (errorMessage : string) => void ) : Promise<{totalCount : number; patients : ListPatient[]}>{
  const promiseData :  Promise<{totalCount : number; patients : ListPatient[]}> =  this.httpClientService.get<{totalCount : number; patients : ListPatient[]}>({
      controller : `patients` ,
      queryString : `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d=> succesCallBack())
    .catch((errorRespone : HttpErrorResponse) => errorCallBack(errorRespone.message) )

    return await promiseData;
  }     

 async delete(id : string){
  const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller : "patients" 
    } , id)

  await  firstValueFrom(deleteObservable);
  }
}
