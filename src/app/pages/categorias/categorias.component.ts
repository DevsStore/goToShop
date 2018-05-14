import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { GrupoService } from './../../services/grupo.service';


@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
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
  providers: [CategoriaService, GrupoService]
})
export class CategoriasComponent implements OnInit {
  data: Array<Categoria> = [];

  grupos: any;

  edit: Categoria = {
    id: 0,
    nombre: "",
    grupo_id: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  create: any = {
    nombre: "",
    grupo_id: "",
    image_url: ""
  };

  constructor(private categoriaService: CategoriaService,
              private grupoService: GrupoService) {}

  ngOnInit() {
    this.loadCategoria();
    this.loadGrupos();
  }

  loadGrupos() {
    this.grupoService.listado().subscribe(
      (res: any) => {
        this.grupos = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
}

  loadCategoria() {
    this.categoriaService.loadCategoria().subscribe(
      (res: Array<Categoria>) => {
        this.data = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }

  OpenModalEdit(item: Categoria) {
    this.edit = item;
  }

  saveCategoria() {
    this.categoriaService.crear(this.create).subscribe(
      (res: any) => {
        this.loadCategoria();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }
}



interface Categoria {
  id: number;
  nombre: string;
  grupo_id: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
