import { Component } from '@angular/core';
@Component({
    selector: 'app-person-list',
    template: `
    <div class="row">
        <div class="col-md-6">
            <input type="text" name="q" class="form-control" placeholder="Who are you looking for?"/>
            <br/>
            
            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth</th>
                        <th>Dead</th>
</tr>
</thead>
                <tbody>
                <tr>
                    <td><a routerLink="/person-list/1" routerLinkActive="active">Michał</a></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><a routerLink="/person-list/2" routerLinkActive="active">Franek</a></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        
        </div>
        <div class="col-md-6">Tree</div>
    </div>
  `
})
export class AppPersonList { }