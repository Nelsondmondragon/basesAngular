import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string [] = ['Capitan AmericA','Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';
  borrarHeroe(): void{
      this.heroeBorrado=this.heroes.pop() || '';
  }

}
