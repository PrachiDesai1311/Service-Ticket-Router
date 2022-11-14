import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTicketComponent } from './viewAllTicket.component';

describe('ViewAllTicketComponent', () => {
  let component: ViewAllTicketComponent;
  let fixture: ComponentFixture<ViewAllTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
