import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDocsComponent } from './main-docs.component';

describe('MainDocsComponent', () => {
  let component: MainDocsComponent;
  let fixture: ComponentFixture<MainDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
