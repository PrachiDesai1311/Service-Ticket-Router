import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerTicketStatusComponent } from './servicerTicketStatus.component';

describe('ServicerTicketStatusComponent', () => {
  let component: ServicerTicketStatusComponent;
  let fixture: ComponentFixture<ServicerTicketStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicerTicketStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicerTicketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});