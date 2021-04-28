import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownCheatsheetComponent } from './markdown-cheatsheet.component';

describe('MarkdownCheatsheetComponent', () => {
  let component: MarkdownCheatsheetComponent;
  let fixture: ComponentFixture<MarkdownCheatsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownCheatsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownCheatsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
