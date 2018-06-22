import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { MiHttpService } from '../../servicios/http/mi-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  constructor(private miUsuario: Usuario, private miServicioUsuario: UsuarioService, private miHttp: MiHttpService) { }

  ngOnInit() {
  }

  login() {
    let datos = {mail: this.usuario, password: this.password};
    this.miHttp.httpPostLogin('login', datos)
    .then(data => {
      localStorage.setItem('token',data);
      console.log(data);
    })
  }
  test(){
    let data = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mjk2OTg0ODksImV4cCI6MjgwMDg4OTY5ODQ4OSwiYXVkIjoiNDNiNjgyY2M1ZTQyMGYzN2U3M2E1ODgwNmY1NDhlZGQxZDg5Yjg1ZCIsImRhdGEiOlt7ImlkIjoxLCJub21icmUiOiJKdWFuIiwiYXBlbGxpZG8iOiJQZXJleiIsIm1haWwiOiJqdWFuQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJ0aXBvIjoxMH1dLCJhcHAiOiJUcCBIdWJlcnRvIn0.bGx5PXjKJT34Oy1UNuzkFSiCVS2KdZPdqTQvS2k9RKA";
    let payload = data.split('.')[1];
      let pay2 = payload.replace('-','+').replace('_','/');
      let datos = JSON.parse(atob(pay2));
      console.log(datos);

  }

}
