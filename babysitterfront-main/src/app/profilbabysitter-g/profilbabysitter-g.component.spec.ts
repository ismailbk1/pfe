import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilbabysitterGComponent } from './profilbabysitter-g.component';

describe('ProfilbabysitterGComponent', () => {
  let component: ProfilbabysitterGComponent;
  let fixture: ComponentFixture<ProfilbabysitterGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilbabysitterGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilbabysitterGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
