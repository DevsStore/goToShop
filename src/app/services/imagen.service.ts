import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Myurl} from "./myurl";

@Injectable()
export class ImagenService {
  constructor(private http: HttpClient) {}


subir(subirImagen: any) {
    return this.http.post(new Myurl().url + "subirimagen", subirImagen);
  }


}
