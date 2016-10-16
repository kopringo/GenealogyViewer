import { Component } from '@angular/core';
@Component({
    selector: 'app-person-list',
    template: `
    <div class="row">
        <div class="col-md-6">
            <input type="text" name="q" class="form-control" placeholder="Who are you looking for?"/>
            <br/>
            
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