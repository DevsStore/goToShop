import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styles: []
})
export class UsuariosComponent implements OnInit {

  data: Array<Usuario> = [];


    constructor(public usuarioService: UsuarioService) { }

    ngOnInit() {
        this.cargarUsuario();

    }

    cargarUsuario() {
        this.usuarioService.cargarUsuario()
            .subscribe((resp: any) => {
                //la variable datos se llena con el resultado de la peticion
                this.data = resp;
            });

    }

}
//creas la interface, una interface es parecida a un modelo x q basicamente modela el dato, ahora la ventaja es q no usas get ni set
interface Usuario {
  id: number;
  fullname: string;
  telefono: string;
  direccion: string;
  di: string;
  email: string;
  tipo: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}
