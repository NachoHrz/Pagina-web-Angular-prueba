//Servicio que introduce los primeros juegos predefinidos en un array

        //Injectable permite aplicar decorador de servicio a la clase para evitar lineas de codigo
import { Injectable } from "@angular/core";
import { Juego } from '../models/juego';

@Injectable()
export class JuegoService{

    public juegos: Juego[];

    constructor(){
        this.juegos = [
            new Juego("Horizont zero dawn", 2019, 'https://image.api.playstation.com/vulcan/img/rnd/202009/2923/jAT7HjpL49A62bU7hLKXJ96b.png'),
            new Juego("Death stranding", 2018, 'https://media.vandal.net/i/720x720/102089/death-stranding-directors-cut-2021711940434_1.jpg'),
            new Juego("OuterWild", 2020, 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_OuterWilds_image1600w.jpg'),
            new Juego("Outward", 2009, 'https://image.api.playstation.com/cdn/EP4062/CUSA10853_00/fxDAUMhkb9QmdhzGt7yPwLAMzgIwczgr.png'),
          ];
    }

    texto(){
        return "Hola que tal";
    }


    getJuegos(){
        return this.juegos;
    }
}