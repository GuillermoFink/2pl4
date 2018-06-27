import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { Usuario } from '../../clases/usuario';
import { Mascota } from '../../clases/mascota';
import { MascotaService } from '../../servicios/mascota/mascota.service';
import { SelectItem } from 'primeng/api';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.css']
})
export class MisMascotasComponent implements OnInit {

  id_usuario: any;
  displayDialog: boolean = false;
  mascotas: SelectItem[];
  
  constructor(private servicioUsuario: UsuarioService, private miMascota: Mascota, private miMascotaService: MascotaService) {
    this.id_usuario = { id_usuario: this.servicioUsuario.getIdUsuario() };
  }

  ngOnInit() {
    this.mascotas = [
      { label: 'Perro', value: 1000 },
      { label: 'Gato', value: 2000 }
    ];
  }

  mascotaElegida(mascotadeOutput){
    this.miMascota = mascotadeOutput;
    this.displayDialog = true;
    console.log(this.miMascota);
  }

  cancelar(){
    this.displayDialog = false;
  }
  guardar(){
    this.displayDialog = false;
    this.miMascotaService.modificarMascota(this.miMascota).then (data => {
      if (data == 'ok'){
        swal({
          type: 'success',
          title: 'OK!',
          text: 'Cambios guardados',
        })
      }else{
        swal({
          type: 'error',
          title: 'Ooops...',
          text: 'Error al guardar el cambio',
        })
      }
      console.log(data);
    })
  }
}
