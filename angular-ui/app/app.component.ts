import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>Genealogy Viewer</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/person-list" routerLinkActive="active">People</a>
      <a routerLink="/place-list" routerLinkActive="active">Places</a>
      <a routerLink="/document-list" routerLinkActive="active">Documents</a>
    </nav>
    <hr/>
    <div class="container">
        <router-outlet></router-outlet>
    </div> 
  `
})
export class AppComponent { }