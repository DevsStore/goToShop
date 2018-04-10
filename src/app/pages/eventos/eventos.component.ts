import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
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
  providers: [EventoService]
})
export class EventosComponent implements OnInit {

  data: Array<Evento> = [];
  edit: Evento = {
    id: 0,
    nombre: "",
    descripcion: "",
    image_url: "",
    fecha_inicio: "",
    fecha_fin: "",
    lat: 0,
    logn: 0,
    ubicacion: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  create: Evento = {
    id: 0,
    nombre: "",
    descripcion: "",
    image_url: "",
    fecha_inicio: "",
    fecha_fin: "",
    lat: 0,
    logn: 0,
    ubicacion: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.loadEventos();
  }

  loadEventos() {
    this.eventoService.listado().subscribe(
      (res: Array<Evento>) => {
        this.data = res;
      },
      err => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }
  OpenModalEdit(item: Evento) {
    this.edit = item;
  }

  saveEvento() {
    this.eventoService.crear(this.create).subscribe(
      (res: any) => {
        this.loadEventos();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }
}

interface Evento {
  id: number;
  nombre: string;
  descripcion: string;
  image_url: string;
  fecha_inicio: string;
  fecha_fin: string;
  lat: number;
  logn: number;
  ubicacion: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
