import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { AppHome }   from './app.home';
import { AppPersonList }   from './app.personlist';
import { AppPerson }   from './app.person';

@NgModule({
    imports:      [ BrowserModule,
        RouterModule.forRoot([
            { path: '', component: AppHome },
            { path: 'person-list', component: AppPersonList },
            { path: 'person-list/:id', component: AppPerson }
        ]) ],
    declarations: [ AppComponent, AppHome, AppPersonList, AppPerson ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }