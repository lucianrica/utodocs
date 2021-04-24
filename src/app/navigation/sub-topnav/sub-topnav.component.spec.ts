import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopnavComponent } from './sub-topnav.component';

describe('SubTopnavComponent', () => {
  let component: SubTopnavComponent;
  let fixture: ComponentFixture<SubTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
