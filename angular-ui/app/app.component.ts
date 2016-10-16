import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <header>
        <div class="container">
            <h1>Genealogy Viewer</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/person-list" routerLinkActive="active">People</a>
      
      <a routerLink="/document-list" routerLinkActive="active">Documents</a>
      <a routerLink="/options" routerLinkActive="active">Options</a>
    </nav>
            <hr/>
        </div>
    
    </header>
    
    
    <div class="container">
        <router-outlet></router-outlet>
    </div> 
  `
})
export class AppComponent { }