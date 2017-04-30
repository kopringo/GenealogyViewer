import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-person',
    template: `
    <div class="row">
        <div class="col-md-6"><app-person-details></app-person-details></div>
        <div class="col-md-6">
        	<div style="background: #eee; width: 100%; height: 500px;">tree...</div>
        </div>
    </div>
  `
})
export class AppPerson implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                //alert(params['id']);
            }
        });
    }


}