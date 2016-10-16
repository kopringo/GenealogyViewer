import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="row">
        <div class="col-md-6">
            <ul>
            
            <li><a routerLink="/person-list/1" routerLinkActive="active">Michał</a></li>
            <li><a routerLink="/person-list/2" routerLinkActive="active">Franek</a></li>
</ul>
        
        </div>
        <div class="col-md-6">Tree</div>
    </div>
  `
})
export class AppPersonList { }