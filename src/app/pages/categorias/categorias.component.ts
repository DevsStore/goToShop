import {Component, OnInit} from '@angular/core';
import {CategoriaService} from '../../services/categoria.service';
import {GrupoService} from '../../services/grupo.service';
import {Router, RouterLinkActive} from "@angular/router";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";


@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styles: [
      `
      .my-btn {
        border: none;
        background: rgba(200, 200, 200, .5);
        transition: all .3s;
        cursor: pointer;
      }

      .my-btn:hover {
        background: rgba(255, 255, 255, 1);
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
              private grupoService: GrupoService,
              private spinnerService: Ng4LoadingSpinnerService,
              private route: Router) {
  }

  ngOnInit() {
    this.loadCategoria();
    this.loadGrupos();
  }

  DeleteItem(id: number) {

    let pregunta = confirm("Deseas realmente eliminar este item");
    if (pregunta) {
      this.spinnerService.show();
      this.categoriaService.eliminar(id).subscribe(
        (res: any) => {

        },
        err => {

        },
        () => {
          this.loadCategoria();
        }
      );
    }

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
    this.spinnerService.show();
    this.categoriaService.loadCategoria().subscribe(
      (res: Array<Categoria>) => {
        this.data = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }, () => {
        this.spinnerService.hide();
      }
    );
  }

  OpenModalEdit(item: Categoria) {
    this.edit = item;
  }

  saveCategoria() {
    this.categoriaService.editar(this.edit).subscribe(
      (res: any) => {
        this.loadCategoria();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }

  goToPage(id: number) {
    this.route.navigate(["/categoria/" + id]);
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
