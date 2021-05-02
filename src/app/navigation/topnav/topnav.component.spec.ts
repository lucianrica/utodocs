import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavComponent } from './topnav.component';

describe('TopnavComponent', () => {
    let component: TopnavComponent;
    let fixture: ComponentFixture<TopnavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TopnavComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TopnavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create navbar', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as logo 'utodocs'`, () => {
        expect(component.appName).toEqual('utodocs');
    });

    it('should render logo title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.header a').textContent)
            .toContain('utodocs');
    });

    it('should render HOME link title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.header a:nth-child(3)').textContent)
            .toContain('HOME');
    });

    it('should render DOCUMENTATION link title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.header a:nth-child(4)').textContent)
            .toContain('DOCUMENTATION');
    });

    it('should render CONTRIBUTE link title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.header a:nth-child(5)').textContent)
            .toContain('CONTRIBUTE');
    });

    it('should render BLOG link title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.header a:nth-child(6)').textContent)
            .toContain('BLOG');
    });

});
