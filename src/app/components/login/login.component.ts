import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioModel} from "../../models/usuario.model";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordar = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('email')){
      // @ts-ignore
      this.usuario.email = localStorage.getItem('email');
      this.recordar = true;
    }

  }
  loginGoogle(){

  }
  login(formulario:NgForm){
    if (formulario.invalid){return;}
    Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      icon: 'info',
      text: 'Espere por favor...'

    });
    Swal.showLoading();
    this.auth.iniciarSesion(this.usuario)
      .subscribe(resp=>{
        console.log(resp);
        Swal.close();

        if (this.recordar){
          localStorage.setItem('email',this.usuario.email);
        }else{
          localStorage.removeItem('email')
        }

        if (this.usuario.email == 'admin@admin.com'){
          this.router.navigateByUrl('/dashboardAdmin')
        }else{
          this.router.navigateByUrl('/dashboard')
        }

      },(er) =>{

        Swal.fire({
          allowOutsideClick: false,
          allowEscapeKey: false,
          icon: 'error',
          title:'Error al iniciar sesión',
          text: er.error.error.message

        });
      })
  }

}
