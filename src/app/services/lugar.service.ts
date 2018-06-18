import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LugarService {
  constructor(private http: HttpClient) {}

  listado() {
    return this.http.get("http://gotoshopec.com/api.php/api/lugares");
  }
  crear(lugar: any) {
    return this.http.post("http://gotoshopec.com/api.php/api/lugares", lugar);
  }
  editar(lugar: any) {
    return this.http.put(
      "http://gotoshopec.com/api.php/api/lugares/" + lugar.id,
      lugar
    );
  }
  eliminar(id: number) {
    return this.http.delete("http://gotoshopec.com/api.php/api/lugares/" + id);
  }
}
