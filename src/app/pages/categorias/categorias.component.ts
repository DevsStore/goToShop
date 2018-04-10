import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';


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
  providers: [CategoriaService]
})
export class CategoriasComponent implements OnInit {
  data: Array<Categoria> = [];

  edit: Categoria = {
    id: 0,
    nombre: "",
    grupo_id: 0,
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  create: Categoria = {
    id: 0,
    nombre: "",
    grupo_id: 0,
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.loadCategoria();
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
  grupo_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
