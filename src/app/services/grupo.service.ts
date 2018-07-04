import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Myurl} from "./myurl";

@Injectable()
export class GrupoService {
  constructor(private http: HttpClient) {}


  listado() {
    return this.http.get(new Myurl().url + "grupos");
  }
  filtroID(id) {
    return this.http.get(new Myurl().url + "categorias/" + id);
  }

  crear(grupo: any) {
    return this.http.post(
      new Myurl().url + "grupos",
      grupo
    );
  }
  editar(grupo: any) {
    return this.http.put(
      new Myurl().url + "grupos/" + grupo.id,
      grupo
    );
  }
  eliminar(id: number) {
    return this.http.delete(new Myurl().url + "grupos/" + id);
  }
}
