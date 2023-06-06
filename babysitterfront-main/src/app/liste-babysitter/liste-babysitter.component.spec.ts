import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBabysitterComponent } from './liste-babysitter.component';

describe('ListeBabysitterComponent', () => {
  let component: ListeBabysitterComponent;
  let fixture: ComponentFixture<ListeBabysitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBabysitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
