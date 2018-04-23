import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guadarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
    console.log('guardado tema');
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
         this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
         console.log('cargado de localstorage');

          this.aplicarTema( this.ajustes.tema );

    } else {
      console.log('USANDO VALORES POR DEFECTO');
       this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema( tema: string ) {

    let url = `assets/css/colors/${tema}.css`;
      this._document.getElementById("tema").setAttribute("href", url);

      this.ajustes.tema = tema;
      this.ajustes.temaUrl = url;
      this.guadarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
