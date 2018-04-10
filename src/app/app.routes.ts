import { GruposComponent } from './pages/grupos/grupos.component';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';


const appRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { titulo: "Dashboard" }
      },
      {
        path: "usuarios",
        component: UsuariosComponent,
        data: { titulo: "Usuarios" }
      },
      {
        path: "grupos",
        component: GruposComponent,
        data: { titulo: "Grupos" }
      },
      {
        path: "lugares",
        component: LugaresComponent,
        data: { titulo: "Lugares" }
      },
      {
        path: "eventos",
        component: EventosComponent,
        data: { titulo: "Eventos" }
      },
      {
        path: "ofertas",
        component: OfertasComponent,
        data: { titulo: "Ofertas" }
      },
      {
        path: "categorias",
        component: CategoriasComponent,
        data: { titulo: "Categorias" }
      },
      { path: "", redirectTo: "/usuarios", pathMatch: "full" }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "**", component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
