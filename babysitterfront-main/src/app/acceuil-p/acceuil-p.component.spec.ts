import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilPComponent } from './acceuil-p.component';

describe('AcceuilPComponent', () => {
  let component: AcceuilPComponent;
  let fixture: ComponentFixture<AcceuilPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
