import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../../services/categoria.service";
import {ActivatedRoute} from "@angular/router";
import {LugarService} from "../../services/lugar.service";


@Component({
  selector: 'app-categorialugares',
  templateUrl: './categorialugares.component.html',
  styleUrls: ['./categorialugares.component.scss'],
  providers: [CategoriaService,LugarService]
})
export class CategorialugaresComponent implements OnInit {
  data: Array<Lugar> = [];

  edit: Lugar = {
    id: 0,
    categoria_id: 0,
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
    categoria_id: 0,
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

  constructor(private categoriaService: CategoriaService,private route:ActivatedRoute,private lugarService:LugarService) {}

  ngOnInit() {
    this.loadLugares();
  }

  loadLugares() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.categoriaService.filterCategoria(id).subscribe(
        (res: Array<Lugar>) => {
          this.data = res;
        },
        error => {
          alert("Upss tenemos problemas de comunicación");
        }
      );
    });

  }
  OpenModalEdit(item: Lugar) {
    this.edit = item;
  }

  saveLugar() {
    this.lugarService.crear(this.create).subscribe(
      (res: any) => {
        this.loadLugares();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }
}


interface Lugar {
  id: number;
  categoria_id: number;
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
