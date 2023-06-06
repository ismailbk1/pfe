import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilbabysitterUComponent } from './profilbabysitter-u.component';

describe('ProfilbabysitterUComponent', () => {
  let component: ProfilbabysitterUComponent;
  let fixture: ComponentFixture<ProfilbabysitterUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilbabysitterUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilbabysitterUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
