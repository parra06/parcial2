import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";

import {InmuebleModel} from "../../models/inmueble.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  inmueble: InmuebleModel = new InmuebleModel();
  public previsualizacion: string = ""
  public archivos: any = []

  constructor(private auth:AuthService,
              private router: Router,
              private  sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  salir(){
    this.auth.cerrarSesion();
    this.router.navigateByUrl('login');
  }

  registrar(formulario:NgForm){

    Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      icon: 'info',

      text: 'Espere por favor'

    });
    Swal.showLoading()
    this.inmueble.foto = this.previsualizacion
    this.auth.registrarInmueble(this.inmueble)

        Swal.close()

  }

  capturarFile(event: Event):any{
    // @ts-ignore
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) =>{
      this.previsualizacion = imagen.base
      console.log(imagen)
    })
    // @ts-ignore
    console.log(event.target.files);


  }

  // @ts-ignore
  extraerBase64 = async ($event:any) => new Promise((resolve,reject) =>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () =>{
        resolve({

          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null

        });
      };

    }catch (e){
      return null
    }
  })
}
