import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GrupoService {
  constructor(private http: HttpClient) {}

  //crud
  //read
  //
  listado() {
    return this.http.get("http://gotoshopec.com/api.php/api/grupos");
  }
  crear(grupo: any) {
    return this.http.post(
      "http://gotoshopec.com/api.php/api/grupos",
      grupo
    );
  }
  editar(grupo: any) {
    return this.http.put(
      "http://gotoshopec.com/api.php/api/grupos/" + grupo.id,
      grupo
    );
  }
  eliminar(id: number) {
    return this.http.delete("http://gotoshopec.com/api.php/api/grupos/" + id);
  }

  cargarUsuario() {
    return this.http.get("http://gotoshopec.com/api.php/api/users");
  }
  //create
  //update
  //delete

  //RUTAS
  /*
  * grupos
  * categorias | categorias/{id_grupo}
  *
  * ccrear -> post
  * editar -> put  this.http.put(ruta/{id_categoria})
  *
  *
  * lugares | lugares/{id_categoria}
  * ofertas | ofertas/{id_lugar}
  * imagenes/{id_lugar}
  * */
}
