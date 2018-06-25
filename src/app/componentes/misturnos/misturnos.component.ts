import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Mascota } from '../../clases/mascota';
import { MascotaService } from '../../servicios/mascota/mascota.service';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { TurnoService } from '../../servicios/turno/turno.service';
import { MiHttpService } from '../../servicios/http/mi-http.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-misturnos',
  templateUrl: './misturnos.component.html',
  styleUrls: ['./misturnos.component.css']
})
export class MisturnosComponent implements OnInit {
  cuerpoTabla: any;
  cols: any[];
  tituloTabla = "Seleccionar mascota para turno";
  constructor(private miMascota: Mascota, private miHttp: MiHttpService, private miRouter: Router, private miServicioMascota: MascotaService, private miUsuario: UsuarioService, private servicioTurno: TurnoService) { }

  ngOnInit() {
    let data = {id_usuario: this.miUsuario.getIdUsuario()};
    this.servicioTurno.traerMisTurnos(data)
    .then (data => {
      if (data != "error" && data != " "){
        this.cuerpoTabla = data;
        this.cols = [
          { field: 'fecha', header: 'Fecha' },
          { field: 'raza', header: 'Raza' },
          { field: 'color', header: 'Color' },
          { field: 'descripcion', header: 'Descripcion' },
          { field: 'estado', header: 'Estado'}
        ]
      }
    })
  }

  onRowSelect(event){
    console.log("SARASA");
  }

}
