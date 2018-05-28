import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styles: []
})
export class UploadimageComponent implements OnInit {

  public filesToUpload: Array<File>;
  frmUploadFotoUm: FormGroup;
  progressStatus = 0;
  img: string = "";
  private imagen: any;

  constructor(private http: HttpClient) {
    this.frmUploadFotoUm = new FormGroup({
      firstName: new FormControl()
    });
  }

  ngOnInit() {
  }

  filesChangeEvent() {

    let data = new FormData();

    data.append('file', this.imagen);

    data.append('_method', 'POST');

    this.http.post('http://localhost:8000/subirimagen', data)
      .subscribe((response: any) => {
        console.log(response)
        this.img = response.url;
      });
  }


  getImage(event) {
    this.imagen = event.target.files[0];
  }
}
