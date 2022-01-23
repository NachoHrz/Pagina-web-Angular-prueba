import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})

//Las pipes sirven para procesar datos dentro de la vista y transformarlos mediante javascript. value tiene el valor
//usado con esta pipe en la vista
export class EsParPipe implements PipeTransform {
    transform(value: any) {
        var espar = "no es par"
        if (value % 2 == 0) {
            espar = "si es par";
        }
        return ("la fecha " + espar)
    }
}

