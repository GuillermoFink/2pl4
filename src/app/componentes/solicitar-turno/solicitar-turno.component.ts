import { Component, OnInit, Input,Output } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { MascotaService } from '../../servicios/mascota/mascota.service';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { MiHttpService } from '../../servicios/http/mi-http.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.css']
})
export class SolicitarTurnoComponent implements OnInit {
  id_usuario: any;
  constructor(private miMascota: Mascota, private miHttp: MiHttpService, private miRouter: Router, private miServicioMascota: MascotaService, private miUsuario: UsuarioService) {
    this.id_usuario = { id_usuario: this.miUsuario.getIdUsuario() };
  }
  date1: Date;
  es: any;
  invalidDates: Array<Date>
  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

    
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }
  mascotaElegida(algo){
    console.log("CAPTURO POR OUTPUT");
    console.log(algo);
  }

}
