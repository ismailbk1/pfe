import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatparentlistComponent } from './chatparentlist.component';

describe('ChatparentlistComponent', () => {
  let component: ChatparentlistComponent;
  let fixture: ComponentFixture<ChatparentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatparentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatparentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
