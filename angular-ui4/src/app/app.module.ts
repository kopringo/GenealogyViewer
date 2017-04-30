import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppHome }   from './app.home';
import { AppLogin }   from './app.login';
import { AppPersonList }   from './app.personlist';
import { AppPerson }   from './app.person';
import { AppOptions }   from './app.options';
import { AppPersonDetails } from "./app.person-details";

import { FormLoginComponent } from './form-login.component';

import { PersonService } from './services/person.service';

import { DocumentsComponent } from './documents.component';

@NgModule({
    imports:      [ BrowserModule,
                    HttpModule,
                    JsonpModule,
                    
        RouterModule.forRoot([
            { path: '', component: AppHome },
            { path: 'login', component: AppLogin },
            { path: 'persons', component: AppPersonList },
            { path: 'person-list/:id', component: AppPerson },
            { path: 'documents', component: DocumentsComponent },
            { path: 'options', component: AppOptions }
        ]) ],
    declarations: [ AppComponent, AppHome, AppLogin, AppPersonList, AppPerson, AppOptions, AppPersonDetails, 
                    FormLoginComponent, 
                    DocumentsComponent, 
                  ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }