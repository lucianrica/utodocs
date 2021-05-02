import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './main/app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MainDocsComponent } from './pages/docs/main-docs/main-docs.component';
import { DocsContentComponent } from './pages/docs/docs-content/docs-content.component';
import { ContributeComponent } from './pages/contribute/contribute.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TopnavComponent } from './navigation/topnav/topnav.component';
import { SubTopnavComponent } from './navigation/sub-topnav/sub-topnav.component';
import { MainSidenavComponent } from './navigation/sidenav/main-sidenav/main-sidenav.component';
import { SidenavItemComponent } from './navigation/sidenav/sidenav-item/sidenav-item.component';
import { SidenavLinkComponent } from './navigation/sidenav/sidenav-link/sidenav-link.component';
import { SafePipePipe } from './services/safe-pipe.pipe';
import { MarkdownCheatsheetComponent } from './shared/markdown-cheatsheet/markdown-cheatsheet.component';
import { WritingDocumentationComponent } from './shared/writing-documentation/writing-documentation.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'contribute', component: ContributeComponent },
    { path: 'docs', component: MainDocsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'cheatsheet', component: MarkdownCheatsheetComponent },
    { path: 'guide', component: WritingDocumentationComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
]


@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        FooterComponent,
        HomeComponent,
        MainDocsComponent,
        DocsContentComponent,
        ContributeComponent,
        BlogComponent,
        TopnavComponent,
        SubTopnavComponent,
        MainSidenavComponent,
        SidenavItemComponent,
        SidenavLinkComponent,
        SafePipePipe,
        MarkdownCheatsheetComponent,
        WritingDocumentationComponent
    ],
    imports: [
        HttpClientModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            sanitize: SecurityContext.NONE
        }),
        MarkdownModule.forChild(),
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(routes, {
            // Restore the last scroll position
            scrollPositionRestoration: "enabled",
            scrollOffset: [0, 0],
            // Enable scrolling to anchors
            anchorScrolling: "enabled",
          })
    ],
    exports: [ RouterModule ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
