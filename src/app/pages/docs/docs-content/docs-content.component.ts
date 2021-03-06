import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { DocsInteractionService } from 'src/app/services/docs-interaction.service';
import sideNavData from '../../../../assets/navbar/sidenav.json';
import Prism from 'prismjs';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-docs-content',
    templateUrl: './docs-content.component.html',
    styleUrls: ['./docs-content.component.css']
})


export class DocsContentComponent implements OnInit {

    message;
    parsed;
    Prism = Prism

    constructor(
        private markdownService: MarkdownService,
        private docsInteractionService: DocsInteractionService,
        private http: HttpClient
    ) { }

    public data: {
        name: string,
        type: string,
        children: Array<object>
    } = sideNavData;



    ngOnInit() {


        if (!this.message) {
            this.provideDefaultValue();
            this.fetchAndTransform(this.message);
        }
        this.docsInteractionService.linkMessage$.subscribe(message => {
            this.fetchAndTransform(message);
        })
    }


    fetchAndTransform(message) {
        this.http
            .get(`assets\\${message}`, { responseType: 'text' })
            .subscribe(data => { this.parsed = this.markdownService.compile(data) })

        // fetch(message)
        //     .then(response => response.text())
        //     .then(data => {
        //         this.parsed = this.markdownService.compile(data);
        //     });
    }

    provideDefaultValue() {
        sideNavData.children.forEach(element => {
            if (element.type == 'file' && !this.message) {
                this.message = element.url
                return
            }
            if (element.type == 'dir' && !this.message) {
                element.children.forEach(elem => {
                    if (elem.type == 'file' && !this.message) {
                        this.message = elem.url
                        return
                    }
                });
            }
        });
    }

}
