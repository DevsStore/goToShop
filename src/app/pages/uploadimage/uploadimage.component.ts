import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styles: []
})
export class UploadimageComponent implements OnInit {

  public filesToUpload: Array<File>;

  constructor() { }

  ngOnInit() {
  }

  filesChangeEvent( fileInput: any ) {
      this.filesToUpload = <Array<File>>fileInput.target.files;

      this.makeFileRequest("http://gotoshopec.com/api.php/api/subirImagen", [], this.filesToUpload).then((result) => {

      });
  }


  makeFileRequest( url: string, params: Array<string>, files: Array<File> ) {
      return new Promise(( resolve, reject ) => {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();

          for ( var i = 0; i < files.length; i++ ) {
            formData.append("uploads[]", files[i], files[i].name);
          }


          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  resolve(JSON.parse(xhr.response));
              } else {
                reject(xhr.response);
              }
            }
          };

          xhr.open("POST", url, true);
          xhr.send(formData);
      });
  }

}
