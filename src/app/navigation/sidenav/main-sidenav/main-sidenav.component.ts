import { Component } from '@angular/core';
import sideNavData from '../../../../assets/navbar/sidenav.json';

@Component({
    selector: 'app-main-sidenav',
    templateUrl: './main-sidenav.component.html',
    styleUrls: ['./main-sidenav.component.css']
})
export class MainSidenavComponent {

    public data: {
        name: string,
        type: string,
        children: Array<object>
    } = sideNavData;
}
