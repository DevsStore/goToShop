import { Component, OnInit } from '@angular/core';
import { OfertaService } from './../../services/oferta.service';



@Component({
  selector: "app-ofertas",
  templateUrl: "./ofertas.component.html",
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
  providers: [OfertaService]
})
export class OfertasComponent implements OnInit {
  data: Array<Oferta> = [];
  edit: Oferta = {
    id: 0,
    lugar_id: 0,
    producto: "",
    descripcion: "",
    precio_regular: 0,
    precio_promocion: 0,
    descuento: 0,
    fecha_inicio: "",
    fecha_fin: "",
    image_url: "",
    condiciones: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
    lat: 0,
    lon: 0
  };
  create: Oferta = {
    id: 0,
    lugar_id: 0,
    producto: "",
    descripcion: "",
    precio_regular: 0,
    precio_promocion: 0,
    descuento: 0,
    fecha_inicio: "",
    fecha_fin: "",
    image_url: "",
    condiciones: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
    lat: 0,
    lon: 0
  };

  constructor(private ofertaService: OfertaService) {}

  ngOnInit() {
    this.loadOfertas();
  }

  loadOfertas() {
    this.ofertaService.listado().subscribe(
      (res: Array<Oferta>) => {
        this.data = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }

  OpenModalEdit(item: Oferta) {
    this.edit = item;
  }

  saveOferta() {
    this.ofertaService.crear(this.create).subscribe(
      (res: any) => {
        this.loadOfertas();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }
}

interface Oferta {
  id: number;
  lugar_id: number;
  producto: string;
  descripcion: string;
  precio_regular: number;
  precio_promocion: number;
  descuento: number;
  fecha_inicio: string;
  fecha_fin: string;
  image_url: string;
  condiciones: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  lat: number;
  lon: number;
}
