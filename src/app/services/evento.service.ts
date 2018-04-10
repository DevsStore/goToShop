import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventoService {
  constructor(private http: HttpClient) {}

  listado() {
    return this.http.get("http://gotoshopec.com/api.php/api/eventos");
  }

  crear(evento: any) {
    return this.http.post("http://gotoshopec.com/api.php/api/eventos", evento);
  }
  editar(evento: any) {
    return this.http.put(
      "http://gotoshopec.com/api.php/api/eventos/" + evento.id,
      evento
    );
  }
  eliminar(id: number) {
    return this.http.delete("http://gotoshopec.com/api.php/api/eventos/" + id);
  }
}
