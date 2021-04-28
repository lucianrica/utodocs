import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-contribute',
    templateUrl: './contribute.component.html',
    styleUrls: ['./contribute.component.css']
})

export class ContributeComponent {
    pageYoffset: number = 0; 
    @HostListener('window:scroll', ['$event']) onScroll(event){
        this.pageYoffset = window.pageYOffset;
     }
    
    constructor(private scroll: ViewportScroller) { }
    
    scrollToTop(){
        this.scroll.scrollToPosition([0,0]);
    }
}
