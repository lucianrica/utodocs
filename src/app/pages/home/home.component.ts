import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{ 
    Prism = Prism

    pageYoffset: number = 0; 
    @HostListener('window:scroll', ['$event']) onScroll(event){
        this.pageYoffset = window.pageYOffset;
     }
    
    constructor(private scroll: ViewportScroller) { }
    
    scrollToTop(){
        this.scroll.scrollToPosition([0,0]);
    }
}
