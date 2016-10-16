import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { AppComponent2 }   from './app.component2';

@NgModule({
    imports:      [ BrowserModule,
        RouterModule.forRoot([
            { path: 'crisis-center', component: AppComponent },
            { path: 'heroes', component: AppComponent2 }
        ]) ],
    declarations: [ AppComponent, AppComponent2 ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }