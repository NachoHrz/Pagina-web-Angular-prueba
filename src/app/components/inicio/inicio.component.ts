import { Component, OnInit } from '@angular/core';

import { ArticuloService } from 'src/app/services/articulo.service';

import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ArticuloService]
})
export class InicioComponent implements OnInit {

  public title: string;
  public articulos: Articulo[]=[];

  constructor(
    private _articuloService: ArticuloService
  ) {
    this.title = "Artículos mas recientes"
   }

  ngOnInit(): void {            //Pasamos como parametro true para sacar los ultimos articulos solamente
    this._articuloService.getUltimoArticulo(true).subscribe(
      //Tiene dos funciones de callback. para recibir datos y otra para recibir error
      //Solo es necesaria la funcion para recibir datos llamada response, la cual almacena en array 
      //los datos de la bd vinculados a la url dada desde articulo.service.ts
      response => {
        //Aqui pasamos los datos extraidos de la url a nuestra variable articulos
        if(response.articulos){
          this.articulos = response.articulos;
          console.log(this.articulos);
        } else{
          alert("No hay articulos");
        }


      },
    );
  }

}
