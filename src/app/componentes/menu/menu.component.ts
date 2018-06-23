import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      { 
        label: 'Solicitar Turno',
        icon: 'fa fa-plus'
      },
      {
        label: 'Mis Mascotas',
        icon: 'fa fa-check'
      },
      {
        label: 'Mis Turnos',
        icon: 'fa fa-times'
      }
    ];
  }

}
