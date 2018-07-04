import {Component, OnInit} from '@angular/core';
import {CategoriaService} from '../../services/categoria.service';
import {GrupoService} from './../../services/grupo.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-grupocategorias',
  templateUrl: './grupocategorias.component.html',
  styleUrls: ['./grupocategorias.component.scss'],
  providers: [CategoriaService, GrupoService]

})
export class GrupocategoriasComponent implements OnInit {
  data: Array<Categoria> = [];
  grupos: any;

  edit: Categoria = {
    id: 0,
    nombre: "",
    grupo_id: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  create: any = {
    nombre: "",
    grupo_id: "",
    image_url: ""
  };

  constructor(private categoriaService: CategoriaService,
              private grupoService: GrupoService, private route: ActivatedRoute, private router: Router, private spinnerService: Ng4LoadingSpinnerService) {


  }

  ngOnInit() {
    this.loadCategoria();
  }

  loadCategoria() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.grupoService.filtroID(id).subscribe(
        (res: any) => {
          this.data = res;
        },
        error => {
          alert("Upss tenemos problemas de comunicación");
        }, () => {
          this.spinnerService.hide();
        }
      );
    });

  }

  saveCategoria() {
    this.categoriaService.crear(this.create).subscribe(
      (res: any) => {
        this.loadCategoria();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }
    );
  }

  OpenModalEdit(item: Categoria) {
    this.edit = item;
  }

  GoToPage(id: number) {
    this.router.navigate(['/categoria/' + id]);
  }

  DeleteItem(id: number) {
    this.spinnerService.show();
    this.categoriaService.eliminar(id).subscribe(
      (res: any) => {

      },
      err => {

      },
      () => {
        this.loadCategoria();
      }
    );
  }
}


interface Categoria {
  id: number;
  nombre: string;
  grupo_id: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
