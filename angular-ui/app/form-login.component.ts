import { Component } from '@angular/core';
import { Account }    from './models/account';
@Component({
    moduleId: module.id,
    selector: 'form-login',
    templateUrl: 'hero-form.component.html'
})
export class FormLoginComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Account(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
        alert("!");
        this.model = new Account(42, '', '');
    }
}