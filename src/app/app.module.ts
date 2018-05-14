import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { AjustetemaComponent } from './pages/ajustetema/ajustetema.component';

// Servicios
import { GrupoService } from './services/grupo.service';
import { UsuarioService } from "./services/usuario.service";
import { CategoriaService } from "./services/categoria.service";
import { LugarService } from './services/lugar.service';
import { SettingsService } from './services/settings.service';
import { GrupocategoriasComponent } from './pages/grupocategorias/grupocategorias.component';
import { CategorialugaresComponent } from './pages/categorialugares/categorialugares.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PagesComponent,
    UsuariosComponent,
    GruposComponent,
    CategoriasComponent,
    LugaresComponent,
    EventosComponent,
    OfertasComponent,
    AjustetemaComponent,
    GrupocategoriasComponent,
    CategorialugaresComponent
  ],
  imports: [BrowserModule, APP_ROUTES, HttpClientModule, FormsModule],
  providers: [GrupoService, UsuarioService, CategoriaService, LugarService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
