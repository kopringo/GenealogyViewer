import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <header>
        <div class="container">
            <h1>Genealogy Viewer</h1>
            
            <ul class="nav nav-tabs">
            	<li role="presentation" class="active"><a routerLink="/" routerLinkActive="active">Home</a></li>
            	<li role="presentation"><a routerLink="/persons" routerLinkActive="active">People</a></li>
            	<li role="presentation"><a routerLink="/documents" routerLinkActive="active">Documents</a></li>
            	<li role="presentation"><a routerLink="/options" routerLinkActive="active">Options</a></li>
                
            </ul>
      
        </div>
    
    </header>
    
    
    <div class="container">
        <router-outlet></router-outlet>
    </div> 
  `
})
export class AppComponent { }