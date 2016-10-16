import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-person-details',
    template: `
    osoba jakas tam...
    <br/>
    <ul>
        <li><a routerLink="/person-list/10" routerLinkActive="active">A1</a></li>
        <li><a routerLink="/person-list/11" routerLinkActive="active">A2</a></li>
        <li><a routerLink="/person-list/12" routerLinkActive="active">A3</a></li>
    </ul>
  `
})
export class AppPersonDetails implements OnInit {



}