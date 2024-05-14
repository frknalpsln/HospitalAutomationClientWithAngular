import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliclinicsComponent } from './policlinics.component';

describe('PoliclinicsComponent', () => {
  let component: PoliclinicsComponent;
  let fixture: ComponentFixture<PoliclinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliclinicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
