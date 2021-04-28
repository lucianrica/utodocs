import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})

export class BlogComponent { 
    pageYoffset: number = 0; 
    @HostListener('window:scroll', ['$event']) onScroll(event){
        this.pageYoffset = window.pageYOffset;
     }
    
    constructor(private scroll: ViewportScroller) { }
    
    scrollToTop(){
        this.scroll.scrollToPosition([0,0]);
    }
}
