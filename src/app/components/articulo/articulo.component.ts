import { Component, OnInit } from '@angular/core';
//Cargar componentes del ruter para recoger parametros por URL
import { Router, ActivatedRoute, Params } from '@angular/router';

//Cargamos el servicio articulo para hacer peticiones ajax
import { ArticuloService } from 'src/app/services/articulo.service';

//importar el modelo de articulo para introducir en el los datos pasados por la url (ajax)
import { Articulo } from 'src/app/models/articulo';

import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers: [ArticuloService]
})
export class ArticuloComponent implements OnInit {

  //variable que va a recoger los datos pasados por response en la funcion getArticulos() afectando a this.:_articuloService
  public articulos: Articulo[] = [];

  //Esta url la vamos a usar para sacar la url de la imagen
  public url: string;

  constructor(
    // _articuloService almacena la url del servicio
    private _articuloService: ArticuloService
  ) { 
    //variable almacenada para sacar la url de las imagenes en la vista
    this.url = Global.url
  }

  ngOnInit() {
    //subscribe es un metodo del observable que permite recoger los datos que devuelve la peticion http.

    // _articuloService contiene el valor de la url almacenada en articulo.service.ts (url de Global + articulos)
    this._articuloService.getArticulos().subscribe(
      //Tiene dos funciones de callback. para recibir datos y otra para recibir error
      //Solo es necesaria la funcion para recibir datos llamada response, la cual almacena en array 
      //los datos de la bd vinculados a la url dada desde articulo.service.ts
      response => {
        //Aqui pasamos los datos extraidos de la url a nuestra variable articulos
        if(response.articulos){
          this.articulos = response.articulos;
        } else{
          alert("No hay articulos");
        }


      },
    );
  }

}
