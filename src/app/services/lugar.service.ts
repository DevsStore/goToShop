import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Myurl} from './myurl';
@Injectable()
export class LugarService {
  constructor(private http: HttpClient) {}

  listado() {
    return this.http.get(new Myurl().url + "lugares");
  }
  crear(lugar: any) {
    return this.http.post(new Myurl().url + "lugares", lugar);
  }
  editar(lugar: any) {
    return this.http.put(
      new Myurl().url + "lugares/" + lugar.id,
      lugar
    );
  }
  eliminar(id: number) {
    return this.http.delete(new Myurl().url + "lugares/" + id);
  }
}
