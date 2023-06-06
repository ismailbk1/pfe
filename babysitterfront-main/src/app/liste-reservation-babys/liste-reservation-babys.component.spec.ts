import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReservationBabysComponent } from './liste-reservation-babys.component';

describe('ListeReservationBabysComponent', () => {
  let component: ListeReservationBabysComponent;
  let fixture: ComponentFixture<ListeReservationBabysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReservationBabysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeReservationBabysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
