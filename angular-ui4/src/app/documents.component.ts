import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-documents',
    template: `
    <div class="row">
        <div class="col-md-12">
        	<table class="table">
        		<thead>
        			<tr>
        				<th>ID</th>
        				<th>File</th>
        			</tr>
        		</thead>
        		<tbody>
        		
        		</tbody>
        	</table>
        </div>
        
    </div>
  `
})
export class DocumentsComponent implements OnInit {
	
    ngOnInit() {
        
    }


}