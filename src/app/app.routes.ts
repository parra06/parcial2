import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistroComponent} from "./components/registro/registro.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./guards/auth.guard";
import {DashboardAdminComponent} from "./components/dashboard-admin/dashboard-admin.component";

const APP_ROUTES: Routes = [
  { path: 'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  { path: 'dashboardAdmin',component:DashboardAdminComponent, canActivate:[AuthGuard]},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},


  {path: '**',pathMatch:'full' , redirectTo: 'login'}
]

export  const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
