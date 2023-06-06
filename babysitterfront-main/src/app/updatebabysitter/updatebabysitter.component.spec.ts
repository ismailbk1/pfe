import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebabysitterComponent } from './updatebabysitter.component';

describe('UpdatebabysitterComponent', () => {
  let component: UpdatebabysitterComponent;
  let fixture: ComponentFixture<UpdatebabysitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebabysitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatebabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
