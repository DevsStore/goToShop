import {Component, OnInit} from '@angular/core';
import {LugarService} from '../../services/lugar.service';
import {CategoriaService} from "../../services/categoria.service";

import {Router, RouterLinkActive} from "@angular/router";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";


@Component({
  selector: "app-lugares",
  templateUrl: "./lugares.component.html",
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
  providers: [LugarService, CategoriaService]
})
export class LugaresComponent implements OnInit {

  data: Array<Lugar> = [];
  categorias: any;

  edit: Lugar = {
    id: 0,
    categoria_id: "",
    razon_social: "",
    descripcion: "",
    lat: 0,
    lon: 0,
    telefono: 0,
    horario_apertura: "",
    horario_cierre: "",
    redes: "",
    direccion: "",
    ubicacion: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  create: Lugar = {
    id: 0,
    categoria_id: "",
    razon_social: "",
    descripcion: "",
    lat: 0,
    lon: 0,
    telefono: 0,
    horario_apertura: "",
    horario_cierre: "",
    redes: "",
    direccion: "",
    ubicacion: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };

  constructor(private lugarService: LugarService, private categoriaService: CategoriaService,
              private spinnerService: Ng4LoadingSpinnerService, private route: Router) {
  }

  ngOnInit() {
    this.loadLugares();
    this.loadCategoria();
  }

  loadLugares() {
    this.spinnerService.show();
    this.lugarService.listado().subscribe(
      (res: Array<Lugar>) => {
        this.data = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }, () => {
        this.spinnerService.hide();
      }
    );
  }

  loadCategoria() {
    this.spinnerService.show();
    this.categoriaService.loadCategoria().subscribe(
      (res: any) => {
        this.categorias = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }, () => {
        this.spinnerService.hide();
      }
    );
  }

  OpenModalEdit(item: Lugar) {
    this.edit = item;
  }

  saveLugar() {
    this.lugarService.editar(this.edit).subscribe(
      (res: any) => {
        this.loadLugares();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
        console.log(error);
      }
    );
  }

  goToPage(id: number) {
    this.route.navigate(["/categoria/" + id]);
  }

  DeleteItem(id: number) {

    let pregunta = confirm("Deseas realmente eliminar este item");
    if (pregunta) {
      this.spinnerService.show();
      this.lugarService.eliminar(id).subscribe(
        (res: any) => {

        },
        err => {

        },
        () => {
          this.loadLugares();
        }
      );
    }

  }
}


interface Lugar {
  id: number;
  categoria_id: string;
  razon_social: string;
  descripcion: string;
  lat: number;
  lon: number;
  telefono: number;
  horario_apertura: string;
  horario_cierre: string;
  redes: string;
  direccion: string;
  ubicacion: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
