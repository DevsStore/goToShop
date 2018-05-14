import { Component, OnInit } from "@angular/core";
import { GrupoService } from "../../services/grupo.service";
import {Router} from "@angular/router";
@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styles: [
    `
    .my-btn{
      border:none;
      background:rgba(200,200,200,.5);
      transition: all .3s;
      cursor:pointer;
    }
    .my-btn:hover{
      background:rgba(255,255,255,1);
    }
  `
  ],
  providers: [GrupoService]
})
export class GruposComponent implements OnInit {
  data: Array<Grupo> = [];
  edit: Grupo = {
    id: 0,
    nombre: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  create: Grupo = {
    id: 0,
    nombre: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  constructor(private gruposService: GrupoService,private router:Router) {}

  ngOnInit() {
    this.loadGrupos();
  }

  loadGrupos() {
    this.gruposService.listado().subscribe(
      (res: Array<Grupo>) => {
        this.data = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }
  OpenModalEdit(item: Grupo) {
    this.edit = item;
  }
  SaveGrupo() {
    this.gruposService.crear(this.create).subscribe(
      (res: any) => {
        this.loadGrupos();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }

  GoToPage(id: number) {
    this.router.navigate(['/grupo/'+id]);
  }
}
interface Grupo {
  id: number;
  nombre: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
