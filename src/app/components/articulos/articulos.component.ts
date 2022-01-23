import { Component, OnInit, Input } from '@angular/core';

import { Articulo } from 'src/app/models/articulo';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public url: string;

  //Definiendo un array de tipo Articulo que recibe datos desde la vista
  //cuidado al inicializar variables sin valor
  @Input()
  articulos: Articulo[] = [];

  constructor() { 
    //el valor de la variable pasa a ser el definido en el servicio global
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

}
