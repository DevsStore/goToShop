import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {



  constructor(public grupoServices: GrupoService) { }

  ngOnInit() {
      this.cargarUsuario();
  }

  cargarUsuario() {
    this.grupoServices.cargarUsuario()
              .subscribe( resp => {
                console.log(resp);
              });

  }

}
