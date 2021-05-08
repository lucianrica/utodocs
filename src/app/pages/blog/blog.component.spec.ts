import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BlogComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render The Quantum Leap title', () => {
        const compiled = fixture.nativeElement;
        expect(compiled
            .querySelector('.markdown h1').textContent)
            .toContain('The Quantum Leap');
    });
});
