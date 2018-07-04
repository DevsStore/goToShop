import {Component, OnInit} from '@angular/core';
import {OfertaService} from '../../services/oferta.service';
import {LugarService} from "../../services/lugar.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";


@Component({
  selector: "app-ofertas",
  templateUrl: "./ofertas.component.html",
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
  providers: [OfertaService, LugarService]
})
export class OfertasComponent implements OnInit {
  data: Array<Oferta> = [];
  lugares: any;
  edit: Oferta = {
    id: 0,
    lugar_id: "",
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
    lon: 0,
    cupon: ""
  };
  create: any = {
    id: 0,
    lugar_id: "",
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
    lon: 0,
    cupon: ""
  };

  constructor(private ofertaService: OfertaService, private spinnerService: Ng4LoadingSpinnerService,
              private LugaresService: LugarService) {
  }

  ngOnInit() {
    this.loadOfertas();
    this.loadLugares();
  }

  loadOfertas() {
    this.spinnerService.show();
    this.ofertaService.listado().subscribe(
      (res: Array<Oferta>) => {
        this.data = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }, () => {
        this.spinnerService.hide();
      }
    );
  }
  loadLugares() {
    //this.spinnerService.show();
    this.LugaresService.listado().subscribe(
      (res: Array<Lugar>) => {
        this.lugares = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }, () => {
        //this.spinnerService.hide();
      }
    );
  }
  DeleteItem(id: number) {
    let pregunta = confirm("Deseas realmente eliminar este item");
    if (pregunta) {
      this.spinnerService.show();
      this.ofertaService.eliminar(id).subscribe(
        (res: any) => {

        },
        err => {

        },
        () => {
          this.loadOfertas();
        }
      );
    }

  }

  OpenModalEdit(item: Oferta) {
    this.edit = item;
  }

  saveOferta() {
    this.ofertaService.editar(this.edit).subscribe(
      (res: any) => {
        this.loadOfertas();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }, () => {
        this.spinnerService.hide();
      }
    );
  }
}

interface Oferta {
  id: number;
  lugar_id: string;
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
  cupon: string;
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
