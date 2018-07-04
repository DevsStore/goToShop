import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Myurl} from './myurl';
@Injectable()
export class OfertaService {
  constructor(private http: HttpClient) {}

  listado() {
    return this.http.get(new Myurl().url + "ofertas");
  }

  crear(oferta: any) {
    return this.http.post(new Myurl().url + "ofertas/", oferta);
  }
  editar(oferta: any) {
    return this.http.put(
      new Myurl().url + "ofertas/" + oferta.id,
      oferta
    );
  }
  eliminar(id: number) {
    return this.http.delete(new Myurl().url + "ofertas/" + id);
  }
}
