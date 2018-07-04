import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Myurl} from './myurl';
@Injectable()
export class CategoriaService {
  constructor(private http: HttpClient) {}

  loadCategoria() {
    return this.http.get(new Myurl().url + "categorias");
  }
  filterCategoria(id) {
    return this.http.get(new Myurl().url + "lugares/" + id);
  }
  crear(categoria: any) {
    return this.http.post(new Myurl().url + "categorias", categoria);
  }

  editar(categoria: any) {
    return this.http.put(
      new Myurl().url + "categorias/" + categoria.id, categoria);
  }

  eliminar(id: number) {
    return this.http.delete(new Myurl().url + "categorias/" + id);
  }
}
