import { Component, OnInit } from '@angular/core';
//Cargamos el servicio articulo para hacer peticiones ajax
import { ArticuloService } from 'src/app/services/articulo.service';

//importar el modelo de articulo para introducir en el los datos pasados por la url (ajax)
import { Articulo } from 'src/app/models/articulo';

import { Global } from 'src/app/services/global';
import { ContadorPalabrasService } from 'src/app/services/contadorPalabras.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  //Para importar un servicio lo introducimos en providers
  providers: [ArticuloService, ContadorPalabrasService]
})
export class BlogComponent implements OnInit {

  //Texto a dividir en palabras y contar
  public text: string = "Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id";

  //Variable donde introducir el resultado de la funcion palabraRepetida del servicio ContadorPalabrasService
  public diccionario!: {[key:string]:number};

  constructor(
    //Como siempre definir el servicio dentro del constructor como private
    private _contadorPalabras: ContadorPalabrasService
  ) { 
  }

  ngOnInit() {
    //Aqui almacenamos el resultado en la variable
    this.diccionario = this._contadorPalabras.palabraRepetida(this.text);
    console.log(this.diccionario);
  }

}
