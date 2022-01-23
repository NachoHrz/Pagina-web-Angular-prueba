//Injectable permite inyectar este servicio de forma global
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Observables los usamos para recoger los datos que devuelve el api
import { Observable } from 'rxjs';

//importacion del servicio global para facilitar la escritura de la url
import { Global } from './global';

@Injectable()
export class ArticuloService{

    //Definir la variable url para almacenar en ella dato de la url del servicio Global
    public url: string;

    constructor(
        //Cargamos el http client para hacer peticiones ajax (recibir con get los datos de la url)
        private _http: HttpClient
    ){

        //almacenamos la url retornada en el servicio Global
        this.url = Global.url;

    }


    prueba(){
        return ("Servicio articulos exito");
    }

    //Metodo que saca el valor de la url del navegador.
    //Para ello necesitamos usar un observable del tipo any, los datos van a sacarse desde la url
    getArticulos():Observable<any>{
        //_httpget almacena los datos obtenidos por la url pasada como parametro, que luego devuelve el return como array
        return this._http.get(this.url+'articulos');
    }
    //Llamo a este método desde el componente blog.component.ts


    //Funcion derivada de la anterior para mostrar ultimo articulo creado
    getUltimoArticulo(last:any=null):Observable<any>{
        var articulos = 'articulos';

        if(last!=null){
            articulos = 'articulos/true';
        }else{
        }

        return this._http.get(this.url+articulos);
    }

    //Metodo para mostrar articulo clickeado desde "saber mas" en articulos
    getArticulo(articuloId:string):Observable<any>{
        return this._http.get(this.url+'articulo/'+articuloId);
    }
}