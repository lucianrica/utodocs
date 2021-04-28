import { Component, Input } from '@angular/core';
import { DocsInteractionService } from 'src/app/services/docs-interaction.service';

@Component({
    selector: 'app-sidenav-link',
    templateUrl: './sidenav-link.component.html',
    styleUrls: ['../main-sidenav/main-sidenav.component.css']
})

export class SidenavLinkComponent {

    @Input() c: any
    isActive: boolean = false


    constructor(private docsInteractionService: DocsInteractionService) { }

    sendLinkPath() { this.docsInteractionService.sendMessage(this.c.url) }

    clickEvent() { 
        let elements = document.querySelectorAll("li > p.link-active")
        elements.forEach(element => {
            element.classList.remove("link-active")
        })
        this.isActive = !this.isActive; 
    }
}
