import { Injectable } from '@angular/core';
import Prism from 'prismjs';

// import "prismjs"
// import "prismjs/components/prism-css.js"
// import "prismjs/components/prism-javascript.js"
// import "prismjs/components/prism-typescript.js"

// declare var Prism: any;


@Injectable()
export class SintaxHighlightingService {

    constructor() { }

    public highlightAll() {
        Prism.highlightAll()
    }
}
