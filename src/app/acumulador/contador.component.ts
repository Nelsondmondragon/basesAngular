import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
      <h1>{{title}}</h1>
      <h3>La base es : {{base}}"</h3>
      <button (click) = "acumular(base);">+{{base}}</button>
      <span>{{numero}}</span>
      <button (click)="acumular(-base);">-{{base}}</button>

    `
})
export class ContadorComponent{
  title: string = 'Acumulador App';

  base: number = 5;
  numero: number = 10;

  acumular(valor: number){
    this.numero+=valor
  }

}
