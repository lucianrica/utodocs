import { Component, Input } from '@angular/core';
import { DocsInteractionService } from 'src/app/services/docs-interaction.service';

@Component({
    selector: 'app-sidenav-link',
    templateUrl: './sidenav-link.component.html',
    styleUrls: ['../main-sidenav/main-sidenav.component.css']
})

export class SidenavLinkComponent {

    @Input() c: any

    constructor(private docsInteractionService: DocsInteractionService) { }

    sendLinkPath() { this.docsInteractionService.sendMessage(this.c.url) }
}
