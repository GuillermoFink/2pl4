import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

// CLASES UTILIZADAS
import { Usuario } from './clases/usuario';
import { Mascota } from './clases/mascota';

// SERVICIOS PROPIOS
import { UsuarioService } from './servicios/usuario/usuario.service';
import { MascotaService } from './servicios/mascota/mascota.service';
import { MiHttpService } from './servicios/http/mi-http.service';
import { HttpModule } from '@angular/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';


const config: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(config)
  ],
  providers: [Usuario, Mascota, MiHttpService, UsuarioService,MascotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
