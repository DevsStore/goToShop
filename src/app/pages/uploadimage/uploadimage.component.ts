import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {LugarService} from "../../services/lugar.service";


@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styles: [],
  providers: [LugarService]
})
export class UploadimageComponent implements OnInit {

  public filesToUpload: Array<File>;
  frmUploadFotoUm: FormGroup;
  progressStatus = 0;
  img = "";
   imagen: any;
   nombre: string;
   lugar: string;
  lugares: any = [];

  constructor(private http: HttpClient, private lugaresService: LugarService) {
    this.frmUploadFotoUm = new FormGroup({
      firstName: new FormControl()
    });
  }

  loadLugares() {
    this.lugaresService.listado().subscribe((res: any) => {
      this.lugares = res;
    });
  }

  filesChangeEvent() {

    let data = new FormData();

    data.append('file', this.imagen);
    data.append('lugar', this.lugar);
    data.append('nombre', this.nombre);

    data.append('_method', 'POST');

    this.http.post('http://localhost:8000/subirimagen', data)
      .subscribe((response: any) => {
        console.log(response);
        this.img = response.url;
      });
  }


  getImage(event) {
    this.imagen = event.target.files[0];
  }

  ngOnInit(): void {
    this.loadLugares();
  }

}
