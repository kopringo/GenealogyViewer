import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PersonService } from './services/person.service';

@Component({
    selector: 'app-person-details',
    providers: [PersonService, ],
    template: `
    <div class="row">
        <div class="col-md-4">
        	<img src="" id="app-person-details-photo"/>
        </div>
        <div class="col-md-8">
            <h1 class="fullname">Osoba Jakas</h1>
            <p>Birth: 10.10.1980 Warszawa</p>
            <p>Dead: 10.10.2040 Warszawa</p>
            <br/>
            <p>Parents: <a routerLink="/person-list/10" routerLinkActive="active">Zenon Jakas</a> <a routerLink="/person-list/1" routerLinkActive="active">Kunegunda Jakas</a></p>
            <p>Siblings: </p>
        </div>
    </div>
    
    
    <br/>
    <ul>
        <li><a routerLink="/person-list/10" routerLinkActive="active">A1</a></li>
        <li><a routerLink="/person-list/11" routerLinkActive="active">A2</a></li>
        <li><a routerLink="/person-list/12" routerLinkActive="active">A3</a></li>
    </ul>
  `
})
export class AppPersonDetails implements OnInit {

	constructor (private personService: PersonService) {}

    ngOnInit() {

    }
    
    

}