import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { AppHome }   from './app.home';
import { AppPersonList }   from './app.personlist';

@NgModule({
    imports:      [ BrowserModule,
        RouterModule.forRoot([
            { path: '', component: AppHome },
            { path: 'person-list', component: AppPersonList }
        ]) ],
    declarations: [ AppComponent, AppHome, AppPersonList ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }