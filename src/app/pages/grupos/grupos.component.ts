import {Component, OnInit} from "@angular/core";
import {GrupoService} from "../../services/grupo.service";
import {Router} from "@angular/router";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styles: [
      `
      .my-btn {
        border: none;
        background: rgba(200, 200, 200, .5);
        transition: all .3s;
        cursor: pointer;
      }

      .my-btn:hover {
        background: rgba(255, 255, 255, 1);
      }
    `
  ],
  providers: [GrupoService]
})
export class GruposComponent implements OnInit {
  data: Array<Grupo> = [];
  edit: Grupo = {
    id: 0,
    nombre: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };
  create: Grupo = {
    id: 0,
    nombre: "",
    image_url: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };

  constructor(private gruposService: GrupoService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.loadGrupos();
  }

  loadGrupos() {

    this.gruposService.listado().subscribe(
      (res: Array<Grupo>) => {
        this.data = res;
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      }, () => {
        this.spinnerService.hide();
      }
    );
  }

  OpenModalEdit(item: Grupo) {
    this.edit = item;
  }

  EditGrupo() {
    this.spinnerService.show();
    this.gruposService.editar(this.edit).subscribe(
      (res: any) => {
        console.log(res);
        this.loadGrupos();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
        console.log(error);
      },
      () => {
        this.loadGrupos();
      }
    );
  }

  SaveGrupo() {
    this.spinnerService.show();
    this.gruposService.crear(this.create).subscribe(
      (res: any) => {
        this.loadGrupos();
      },
      error => {
        alert("Upss tenemos problemas de comunicación");
      },
      () => {
        this.loadGrupos();
      }
    );
  }

  GoToPage(id: number) {
    this.router.navigate(['/grupo/' + id]);
  }

  DeleteGrupo(id: number) {
    let pregunta = confirm("Deseas realmente eliminar este Grupo");
    if (pregunta) {
      this.spinnerService.show();
      this.gruposService.eliminar(id).subscribe(
        (res: any) => {

        },
        err => {

        },
        () => {
          this.loadGrupos();
        }
      );
    }

  }
}

interface Grupo {
  id: number;
  nombre: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
