import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {
  items: MenuItem[];

  constructor(private miRoute: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Turnos',
        icon: 'fa fa-plus',
        items: [
          { label: 'Solicitar Turno', icon: 'fa fa-plus', command: (click) => { this.miRoute.navigate(['/cliente/turnos']) } },
          { label: 'Mis Turnos', icon: 'fa fa-sticky-note', command: (click) => { this.miRoute.navigate(['/cliente/turnos']) } },
        ]
      },
      {
        label: 'Mascotas',
        icon: 'fa fa-check',
        items: [
          { label: 'Agregar Mascota', icon: 'fa fa-plus', command: (click) => { this.miRoute.navigate(['/cliente/altaMascota']) } },
          { label: 'Mis Mascotas', icon: 'fa fa-crow', command: (click) => { this.miRoute.navigate(['/cliente/mascotas']) } },
         
        ]
      }
    ];

    
  }

}
