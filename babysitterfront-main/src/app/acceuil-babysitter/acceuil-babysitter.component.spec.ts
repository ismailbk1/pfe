import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilBabysitterComponent } from './acceuil-babysitter.component';

describe('AcceuilBabysitterComponent', () => {
  let component: AcceuilBabysitterComponent;
  let fixture: ComponentFixture<AcceuilBabysitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilBabysitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilBabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
