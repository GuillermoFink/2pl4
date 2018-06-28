import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private miRouter: Router) { }

  canActivate() {
    var aprobacion = false;
    //capturo token del local storage
    let data = localStorage.getItem('token');
    //decodifico token
    let payload = data.split('.')[1];
    let pay2 = payload.replace('-', '+').replace('_', '/');
    let datos = JSON.parse(atob(pay2));
    console.log(datos);
    console.log(datos['data']['tipo']);
    //comparo y si el tipo coincide acepto
    if (datos['data'][0]['tipo'] == 10) {
      aprobacion = true;
    }else{
      this.miRouter.navigate(['/login']);
    }
    return aprobacion;

  }
}
