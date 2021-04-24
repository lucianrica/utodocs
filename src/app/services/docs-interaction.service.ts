import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DocsInteractionService {
    private linkMessageSource = new Subject<string>();
    linkMessage$ = this.linkMessageSource.asObservable();

    constructor() { }

    sendMessage(message: string) {
        this.linkMessageSource.next(message);
    }
}
