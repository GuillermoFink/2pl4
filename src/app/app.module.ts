import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

// CLASES UTILIZADAS
import { Usuario } from './clases/usuario';
import { Mascota } from './clases/mascota';

// MODULO DE PRIMENG
import { PrimengModule } from './modulos/primeng/primeng.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// SERVICIOS PROPIOS
import { UsuarioService } from './servicios/usuario/usuario.service';
import { MascotaService } from './servicios/mascota/mascota.service';
import { MiHttpService } from './servicios/http/mi-http.service';
import { HttpModule } from '@angular/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuClienteComponent } from './componentes/menu-cliente/menu-cliente.component';
import { MisMascotasComponent } from './componentes/mis-mascotas/mis-mascotas.component';
import { MisturnosComponent } from './componentes/misturnos/misturnos.component';
import { AltaMascotaComponent } from './componentes/alta-mascota/alta-mascota.component';


const config: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '*',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      {
        path: 'mascotas',
        component: MisMascotasComponent
      },
      {
        path: 'turnos',
        component: MisturnosComponent
      },
      {
        path: 'altaMascota',
        component: AltaMascotaComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'registro',
    component: RegistroUsuarioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ClienteComponent,
    RegistroUsuarioComponent,
    MenuComponent,
    MenuClienteComponent,
    MisMascotasComponent,
    MisturnosComponent,
    AltaMascotaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    AngularFontAwesomeModule,
    HttpModule,
    RouterModule.forRoot(config)
  ],
  providers: [Usuario, Mascota, MiHttpService, UsuarioService, MascotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
