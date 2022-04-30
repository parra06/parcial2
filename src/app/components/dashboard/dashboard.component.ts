import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {InmuebleModel} from "../../models/inmueble.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  inmueble: InmuebleModel= new InmuebleModel()

  hogares: Array<InmuebleModel> = this.inmueble.listaInmuebles
  constructor(private auth:AuthService,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.hogares)
  }

  salir(){
    this.auth.cerrarSesion();
    this.router.navigateByUrl('login');
  }
}
