import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-main-docs',
    templateUrl: './main-docs.component.html',
    styleUrls: ['./main-docs.component.css']
})

export class MainDocsComponent { 
    pageYoffset: number = 0; 
    @HostListener('window:scroll', ['$event']) onScroll(event){
        this.pageYoffset = window.pageYOffset;
     }
    
    constructor(private scroll: ViewportScroller) { }
    
    scrollToTop(){
        this.scroll.scrollToPosition([0,0]);
    }
}
