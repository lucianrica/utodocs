import { Component } from '@angular/core';

@Component({
    selector: 'app-sub-topnav',
    templateUrl: './sub-topnav.component.html',
    styleUrls: ['./sub-topnav.component.css']
})

export class SubTopnavComponent { 
    setActiveClass() {
        return "active"
    }
}
