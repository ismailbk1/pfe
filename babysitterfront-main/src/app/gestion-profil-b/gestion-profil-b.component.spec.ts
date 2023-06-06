import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfilBComponent } from './gestion-profil-b.component';

describe('GestionProfilBComponent', () => {
  let component: GestionProfilBComponent;
  let fixture: ComponentFixture<GestionProfilBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProfilBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProfilBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
