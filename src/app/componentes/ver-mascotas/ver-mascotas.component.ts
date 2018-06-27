import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Mascota } from '../../clases/mascota';
import { MascotaService } from '../../servicios/mascota/mascota.service';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { MiHttpService } from '../../servicios/http/mi-http.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ver-mascotas',
  templateUrl: './ver-mascotas.component.html',
  styleUrls: ['./ver-mascotas.component.css']
})
export class VerMascotasComponent implements OnInit {
  mascotas: SelectItem[];
  cuerpoTabla: any;
  cols: any[];
  tituloTabla = "Seleccionar mascota para turno";
  mascotaSeleccionada: Mascota;
  opciones: any[];
  anios: number = 0;
  yearFilter: number;

  yearTimeout: any;
  constructor(private miMascota: Mascota, private miHttp: MiHttpService, private miRouter: Router, private miServicioMascota: MascotaService, private miUsuario: UsuarioService) {
    this.opciones = [
      { label: 'Todos', value: null },
      { label: 'Perro', value: 1000 },
      { label: 'Gato', value: 2000 }
    ];
  }

  ngOnInit() {
    this.miServicioMascota.traerTodasLasMascotas().then(data => {
      if (data != null) {
        this.cuerpoTabla = data;
        this.cols = [
          { field: 'raza', header: 'Raza' },
          { field: 'color', header: 'Color' },
          { field: 'edad', header: 'Edad' },
          { field: 'tipo', header: 'Tipo' }
        ]
      } else {
        console.log("error al traer mascotas");
      }
    });
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'edad', 'gt');
    }, 250);
  }

  onRowSelect(datos){
    console.log(datos);
  }

}
