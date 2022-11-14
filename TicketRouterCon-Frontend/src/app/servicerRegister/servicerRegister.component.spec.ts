import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerRegisterComponent } from './servicerRegister.component';

describe('ServicerRegisterComponent', () => {
  let component: ServicerRegisterComponent;
  let fixture: ComponentFixture<ServicerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicerRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
