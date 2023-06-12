import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbabysitterComponent } from './chatbabysitter.component';

describe('ChatbabysitterComponent', () => {
  let component: ChatbabysitterComponent;
  let fixture: ComponentFixture<ChatbabysitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbabysitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
