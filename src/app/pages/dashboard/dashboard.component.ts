import { Component, OnInit } from '@angular/core';
import {GrupoService} from '../../services/grupo.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
  providers:[GrupoService]
})
export class DashboardComponent implements OnInit {

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
  	this.grupoService.listado().subscribe(
  	  res=>{
  	    console.log(res);
      }
    )

  }

}
