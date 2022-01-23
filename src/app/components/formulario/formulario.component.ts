import { Component, OnInit } from '@angular/core';
import { ContadorPalabrasService } from 'src/app/services/contadorPalabras.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [ContadorPalabrasService]
})
export class FormularioComponent implements OnInit {

  public usuario: any;
  public campo: string = "";
  public diccionario!: {[key:string]:number};
  public texto!:string;

  constructor(
    private _contadorPalabras: ContadorPalabrasService
  ) {
    this.usuario = {
      nombre: '',
      apellidos: '',
      biografia: '',
      genero: ''
    }
  }
  ngOnInit() {
  }
  onSubmit(){
    alert("Enviado")
  }

  EventoClick(){
    alert("Has clickeado")
  }

  EventoBlur(){
    alert("Abandonando el campo de texto")
  }

  EventoKeyup(){
    alert("Has dado a enter")
  }


  ContarTexto(){
    //Aqui almacenamos el resultado en la variable
    this.diccionario = this._contadorPalabras.palabraRepetida(this.texto);
    console.log(this.diccionario);}
}
