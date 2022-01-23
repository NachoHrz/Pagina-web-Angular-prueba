import { Component, OnInit } from '@angular/core';
import { Juego } from '../../models/juego';

//Importacion del servicio para general juegos predefinidos
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css'],
  //providers para usar el servicio de juego
  providers: [JuegoService]
})
export class JuegosComponent implements OnInit {

  public titulo: string;

  public Favorita!: Juego;

  public fecha: any;

  //para representar tipos de datos concretos, como un array de peliculas, crear un modelo y usarlo
  //Los domelos son clases con ciertas propiedades
  public juegos: Juego[];

  constructor(
    //Para usar el servicio definimos propiedad privada en el constructor
    //Las propiedades vinculadas a servicios siempre empiezan por _
    private _juegoService: JuegoService

  ) {
    this.titulo = "Juegos";

    this.fecha = new Date(2022, 15, 1);

    //Pasamos los juegos predefinidos en el servicio a la variable juegos con modelo Juego
    this.juegos = this._juegoService.getJuegos();

      /**
            new Juego("Horizont zero dawn", 2019, 'https://image.api.playstation.com/vulcan/img/rnd/202009/2923/jAT7HjpL49A62bU7hLKXJ96b.png'),
            new Juego("Death stranding", 2018, 'https://media.vandal.net/i/720x720/102089/death-stranding-directors-cut-2021711940434_1.jpg'),
            new Juego("OuterWild", 2020, 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_OuterWilds_image1600w.jpg'),
            new Juego("Outward", 2009, 'https://image.api.playstation.com/cdn/EP4062/CUSA10853_00/fxDAUMhkb9QmdhzGt7yPwLAMzgIwczgr.png'),
            
             * asi se definen objetos de manera literal
            {year: 2019, titulo: "Horizont zero dawn", image: 'https://image.api.playstation.com/vulcan/img/rnd/202009/2923/jAT7HjpL49A62bU7hLKXJ96b.png'},
            {year: 2019, titulo: "Death stranding", image: 'https://media.vandal.net/i/720x720/102089/death-stranding-directors-cut-2021711940434_1.jpg'},
            {year: 2020, titulo: "OuterWild", image: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_OuterWilds_image1600w.jpg'},
            {year: 2009, titulo: "Outward", image: 'https://image.api.playstation.com/cdn/EP4062/CUSA10853_00/fxDAUMhkb9QmdhzGt7yPwLAMzgIwczgr.png'},
            */
    console.log("constructor lanzado");
    console.log(this.juegos);
  }

  ngOnInit() {

    console.log(this._juegoService.texto());

  }

  ngOnChanges() {
    console.log("Componente cambiado");
  }

  cambiarTitulo() {
    this.titulo = "Juegos era"
  }
  //Funcion que almacena en el objeto Favorita de tipo Juego el juego contenido por el evento, el cuál ligamos en el hijo ts
  mostrarFavorita(event: any) {
    this.Favorita = event.juego;
    console.log("juego favorito: ", this.Favorita.titulo);
  }

}
