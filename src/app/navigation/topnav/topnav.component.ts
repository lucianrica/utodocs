import { Component } from '@angular/core';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})

export class TopnavComponent {
    appName = 'utodocs'

    setActiveClass() {
        return "active"
    }
}
