import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola Mundo</h1>
    <h1>{{ title }}</h1>
    <h3>
      la base es <span>{{ base }}</span>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
