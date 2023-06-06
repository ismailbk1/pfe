import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReservationParentComponent } from './liste-reservation-parent.component';

describe('ListeReservationParentComponent', () => {
  let component: ListeReservationParentComponent;
  let fixture: ComponentFixture<ListeReservationParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReservationParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeReservationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
