import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopnavComponent } from './sub-topnav.component';

describe('SubTopnavComponent', () => {
    let component: SubTopnavComponent;
    let fixture: ComponentFixture<SubTopnavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubTopnavComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubTopnavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create sub-navbar', () => {
        expect(component).toBeTruthy();
    });

    it('should render Writing Documentation link title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.sub-nav a:nth-child(1)').textContent)
            .toContain('Writing Documentation');
    });

    it('should render separator', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.sub-nav p:nth-child(2)').textContent)
            .toContain('|');
    });

    it('should render Writing Documentation link title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.sub-nav a:nth-child(3)').textContent)
            .toContain('Markdown Cheatsheet');
    });

});
