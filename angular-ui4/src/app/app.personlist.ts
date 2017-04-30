import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';

@Component({
    selector: 'app-person-list',
    providers: [PersonService, ],
    template: `
    <div class="row">
        <div class="col-md-6">
            <input type="text" name="q" class="form-control" placeholder="Who are you looking for?"/>
            <br/>
            
            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th>Name...</th>
                        <th>Birth</th>
                        <th>Dead</th>
</tr>
</thead>
                <tbody>
                <tr>
                    <td><a (click)="onClickMe()">Michał</a></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                  <td colspan="3">
                  Details info...
                  </td>
                </tr>
                <tr>
                    <td><a routerLink="/person-list/2" routerLinkActive="active">Franek</a></td>
                    <td></td>
                    <td></td>
                </tr>
                
                <template ngFor let-item [ngForOf]="person_list" let-i="index" [ngForTrackBy]="trackByFn">
                	<tr>
		                <td><a routerLink="/person-list/{{person.id}}" routerLinkActive="active">{{person.fist_name}}</a></td>
		                <td></td>
		                <td></td>
		            </tr>
                </template>
                
                </tbody>
            </table>
        
        </div>
        <div class="col-md-6">Tree</div>
    </div>
  `
})
export class AppPersonList implements OnInit {
	mode = 'Observable';
	
	constructor (private personService: PersonService) {}
	
  person_list(){
    return this.getList();
  }
  
  onClickMe() {
    alert('You are my hero!');
  }
  
	ngOnInit() { this.getList(); }
	
    getList() {
    	
      return [{'id': 1, 'first_name': 'Ktos', 'last_name': 'Nazwisko'}, ];
      
    	//return [];
    	/*
    	this.personService.getList()
                     .subscribe(
                       person_list => this.person_list = person_list,
                       error =>  this.errorMessage = <any>error);
                       */
	}
}