import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscnounouComponent } from './inscnounou.component';

describe('InscnounouComponent', () => {
  let component: InscnounouComponent;
  let fixture: ComponentFixture<InscnounouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscnounouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscnounouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
