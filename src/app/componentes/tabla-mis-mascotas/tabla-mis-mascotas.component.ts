import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
import { Mascota } from '../../clases/mascota';
import { MascotaService } from '../../servicios/mascota/mascota.service';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { MiHttpService } from '../../servicios/http/mi-http.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';




@Component({
  selector: 'app-tabla-mis-mascotas',
  templateUrl: './tabla-mis-mascotas.component.html',
  styleUrls: ['./tabla-mis-mascotas.component.css']
})



export class TablaMisMascotasComponent implements OnInit {
  mascotas: SelectItem[];
  cuerpoTabla: any;
  cols: any[];
  tituloTabla = "Seleccionar mascota para turno";
  mascotaSeleccionada: Mascota;

  @Input() id_usuario: any;

  constructor(private miMascota: Mascota, private miHttp: MiHttpService, private miRouter: Router, private miServicioMascota: MascotaService, private miUsuario: UsuarioService) { }

  ngOnInit() {
    this.miServicioMascota.traerMascotasPorDuenio(this.id_usuario).then(data => {
      if (data != null) {
        this.cuerpoTabla = data;
        this.cols = [
          { field: 'raza', header: 'Raza' },
          { field: 'color', header: 'Color' },
          { field: 'edad', header: 'Edad' },
          { field: 'tipo', header: 'Tipo' }
        ]
      }
    });
  }

  onRowSelect(event) {
    this.miServicioMascota.traerMascotaPorId(this.mascotaSeleccionada.id).then(data =>{
      console.log(this.mascotaSeleccionada);
    })
    //this.miServicioMascota.traer(this.vehiculoSeleccionado.id_chofer).then(data => {
     // this.unChofer = data[0];
    //});
  }

}
