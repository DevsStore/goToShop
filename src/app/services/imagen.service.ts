import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ImagenService {
  constructor(private http: HttpClient) {}


subir(subirImagen: any) {
    return this.http.post("http://gotoshopec.com/api.php/api/subirImagen", subirImagen);
  }


}
