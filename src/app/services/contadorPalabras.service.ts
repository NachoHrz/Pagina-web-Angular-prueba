//Injectble siempre para los servicios
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorPalabrasService {


  constructor() { }
  //la primera funcion va a separar las palabras por espacios, pasandolas antes a minusculas y reemplazando ! . , por espacios
  normalizar(word:string){

    return word.toLowerCase().replace(/[!.,()]/g, " ");

  }

  //Funcion que devuelve un array con cada palabra y el numero de veces que se repite
  palabraRepetida(text:string){

    //diccionario contendra cada palabra como key y cada repeticion de estas como value
    let diccionario: {[key:string]:number} = {};

    //Esta definicion separa las palabras del texto mediante espacio
    let separarPalabras = text.split(" ");

    for (let palabra of separarPalabras){

      //Si la palabra despues de ser normalizada ya ha sido almacenada se pasara a aumentar el contador de esa palabra en 1
      if (this.normalizar(palabra) in diccionario){
        ++diccionario[this.normalizar(palabra)];
      } else{
        //Si no el else inicializa el valor de la key palabra a 1
        diccionario[this.normalizar(palabra)] = 1;
      }
    }

    //Devuelve un array {[key:string]:number} con las palabras en cada posicion y el contador de cada una
    return diccionario;

  }
}
