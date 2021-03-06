import { Component, Input } from '@angular/core';
import { DocsInteractionService } from 'src/app/services/docs-interaction.service';
import { SidenavLinkModule } from './../../../models/sidenav-link/sidenav-link.module';

@Component({
    selector: 'app-sidenav-item',
    templateUrl: './sidenav-item.component.html',
    styleUrls: ['../main-sidenav/main-sidenav.component.css']
})

export class SidenavItemComponent {

    @Input() item: any
    status: boolean = false;
    selectedLink: SidenavLinkModule

    constructor(private docsInteractionService: DocsInteractionService) { }

    
    clickEvent() { this.status = !this.status; }
    clickEventSublink() { this.status = !this.status; }
    sendLinkPath() { this.docsInteractionService.sendMessage(this.item.url) }

    onSelect(c: SidenavLinkModule) {
        this.selectedLink = c
    }
}
