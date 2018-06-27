import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor(private miRoute: Router) { }

  ngOnInit() {
    this.items = [
      { 
        label: 'Usuarios',
        icon: 'fa fa-user',
        items:[
          { label: 'Ver Usuarios', icon: 'fa fa-users', command: (click) => { this.miRoute.navigate(['/admin/verUsuarios']) }},
          { label: 'Alta de usuario', icon: 'fa fa-user-plus', command: (click) => { this.miRoute.navigate(['/admin/altaUsuario']) }}
        ]
      },
      {
        label: 'Turnos',
        icon: 'fa fa-check',
        items: [
          {label: 'Ver turnos', icon: 'fa fa-check'}
        ]
      },
      {
        label: 'Mascotas',
        icon: 'fas fa-dove',
        items: [
          { label: 'Ver mascotas', icon: 'fas fa-frog'},
          { label: 'Actualizar ficha de mascota', icon: 'fas fa-kiwi-bird'}
        ]
      }
    ];
  }

}
