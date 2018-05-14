import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {
  constructor(private http: HttpClient) {}

  loadCategoria() {
    return this.http.get("http://gotoshopec.com/api.php/api/categorias");
  }
  filterCategoria(id) {
    return this.http.get("http://www.gotoshopec.com/api.php/api/lugares/"+id);
  }
  crear(categoria: any) {
    return this.http.post("http://gotoshopec.com/api.php/api/categorias", categoria);
  }

  editar(categoria: any) {
    return this.http.put(
      "http://gotoshopec.com/api.php/api/categorias/" + categoria.id,
      categoria
    );
  }

  eliminar(id: number) {
    return this.http.delete("http://gotoshopec.com/api.php/api/categorias/" + id);
  }
}
