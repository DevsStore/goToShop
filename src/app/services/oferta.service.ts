import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfertaService {
  constructor(private http: HttpClient) {}

  listado() {
    return this.http.get("http://gotoshopec.com/api.php/api/ofertas");
  }

  crear(oferta: any) {
    return this.http.post("http://gotoshopec.com/api.php/api/ofertas/", oferta);
  }
  editar(oferta: any) {
    return this.http.put(
      "http://gotoshopec.com/api.php/api/ofertas/" + oferta.id,
      oferta
    );
  }
  eliminar(id: number) {
    return this.http.delete("http://gotoshopec.com/api.php/api/ofertas/" + id);
  }
}
