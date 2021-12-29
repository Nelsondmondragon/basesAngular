import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  @Input() nuevo = {
    nombre:'',
    poder: 0

  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregarPersonaje(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre :'',
      poder:0

    }

  }

}
