import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Juego } from '../../models/juego';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  //Esta es la forma de crear objetos recogidos de componente hijo, ya que así no sale error por no darle valor
  //Coge el modelo creado para hacer los juegos
  @Input()
  juego!: Juego;

  //Output para sacar juego favorito que llamamos desde juegos.html
  @Output() MarcarFavorita = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  //Funcion que saca los datos del elemento juego.
  //Usada en el componente boton
  seleccionar(event: Event, juego: Juego) {
    this.MarcarFavorita.emit({
      juego: juego
    });


  }

}
