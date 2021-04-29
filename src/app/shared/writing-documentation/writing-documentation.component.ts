import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-documentation',
  templateUrl: './writing-documentation.component.html',
  styleUrls: ['./writing-documentation.component.css']
})
export class WritingDocumentationComponent {

    pageYoffset: number = 0; 
    @HostListener('window:scroll', ['$event']) onScroll(event){
        this.pageYoffset = window.pageYOffset;
     }
    
    constructor(private scroll: ViewportScroller) { }
    
    scrollToTop(){
        this.scroll.scrollToPosition([0,0]);
    }

}
