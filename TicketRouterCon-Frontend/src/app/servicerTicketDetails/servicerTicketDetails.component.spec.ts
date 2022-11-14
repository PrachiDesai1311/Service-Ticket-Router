import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerTicketDetailsComponent } from './servicerTicketDetails.component';

describe(' ServicerTicketDetailsComponent', () => {
  let component:   ServicerTicketDetailsComponent;
  let fixture: ComponentFixture<  ServicerTicketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  ServicerTicketDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicerTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});