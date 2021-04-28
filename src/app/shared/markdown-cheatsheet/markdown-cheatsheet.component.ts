import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-markdown-cheatsheet',
  templateUrl: './markdown-cheatsheet.component.html',
  styleUrls: ['./markdown-cheatsheet.component.css']
})
export class MarkdownCheatsheetComponent {

    pageYoffset: number = 0; 
    @HostListener('window:scroll', ['$event']) onScroll(event){
        this.pageYoffset = window.pageYOffset;
     }
    
    constructor(private scroll: ViewportScroller) { }
    
    scrollToTop(){
        this.scroll.scrollToPosition([0,0]);
    }

}
