import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})

export class SidenavLinkModule {
    type: string
    name: string
    fullPath: string
    children: [
        {
            name: string
            fullPath: string
            url: string
            type: string
            children: [
                {
                    name: string
                    fullPath: string
                    url: string
                    type: string
                }
            ]
        }
    ]
}
