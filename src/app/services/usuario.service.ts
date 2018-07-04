import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Myurl} from "./myurl";
@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}

  cargarUsuario() {
    return this.http.get(new Myurl().url + "users");
  }
}
