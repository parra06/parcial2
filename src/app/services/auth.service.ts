import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioModel} from "../models/usuario.model";


import {map} from "rxjs";
import {InmuebleModel} from "../models/inmueble.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private api_key="AIzaSyCU_WVlJUc32Gk026I2gqb1NovaK2o2slE";

  usuarioToken: string | null = "";

  constructor( private http : HttpClient) {
    this.leerToken();
  }

  registrar(usuario: UsuarioModel){
    const datos = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.api_key}`,
      datos
    ).pipe(
     map(resp=>{
      console.log("Ejecutando el map...");
      // @ts-ignore
       this.guardarToken(resp['idToken']);
      return resp;
    })
    )
  }
  registrarInmueble(inmueble: InmuebleModel){
    inmueble.listaInmuebles.push(inmueble)
    console.log(inmueble)
  }

  iniciarSesion(usuario: UsuarioModel){
    const datos = {
      ...usuario,
      returnSecureToken: true
    };
    if (datos.nombreCompleto == 'admin'){

    }
    return this.http.post(

      `${this.url}signInWithPassword?key=${this.api_key}`,
      datos
    ).pipe(
      map(resp=>{
        console.log("Ejecutando el map...");
        // @ts-ignore
        this.guardarToken(resp['idToken']);
        return resp;
      })
    )
  }


  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('expira');
  }

  private guardarToken(idToken: string){
    this.usuarioToken = idToken;
    localStorage.setItem('token',this.usuarioToken);

    let horaInicio = new Date();
    horaInicio.setSeconds(60);
    localStorage.setItem('expira',horaInicio.getTime().toString())

  }

  private leerToken(){
    if (localStorage.getItem('token')){
      this.usuarioToken=localStorage.getItem('token');
    }else{
      this.usuarioToken = "";

    }
    return this.usuarioToken
  }

  estaAuth(): boolean{
    // @ts-ignore
    if(this.usuarioToken?.length<10){return false;}

    const expira = Number(localStorage.getItem('expira'));
    const fechaExpira = new Date();
    fechaExpira.setTime(expira);

    return fechaExpira>new Date();

  }


}
