import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroeBorrado: string = '';

  constructor() {}

  ngOnInit(): void {}

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
