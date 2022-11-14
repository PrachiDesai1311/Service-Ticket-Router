import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerViewAllTicketComponent } from './servicerViewAllTicket.component';

describe('ServicerViewAllTicketComponent', () => {
  let component: ServicerViewAllTicketComponent;
  let fixture: ComponentFixture<ServicerViewAllTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicerViewAllTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicerViewAllTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
