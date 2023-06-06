import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilparentComponent } from './profilparent.component';

describe('ProfilparentComponent', () => {
  let component: ProfilparentComponent;
  let fixture: ComponentFixture<ProfilparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
