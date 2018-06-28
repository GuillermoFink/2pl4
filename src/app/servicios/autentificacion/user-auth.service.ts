import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private miRouter: Router) { }

  canActivate(route, state): boolean {
    var aprobacion = false;
    //capturo token del local storage
    let data = localStorage.getItem('token');
    //decodifico token
    let payload = data.split('.')[1];
    let pay2 = payload.replace('-', '+').replace('_', '/');
    let datos = JSON.parse(atob(pay2));
    console.log("datos del token");
    console.log(datos);
    //comparo y si el tipo coincide acepto
    if (datos['data'][0]['tipo'] == 20) {
      aprobacion = true;
    }else{
      this.miRouter.navigate(['/login']);
    }
    return aprobacion;
  }
}
