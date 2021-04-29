import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingDocumentationComponent } from './writing-documentation.component';

describe('WritingDocumentationComponent', () => {
  let component: WritingDocumentationComponent;
  let fixture: ComponentFixture<WritingDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
