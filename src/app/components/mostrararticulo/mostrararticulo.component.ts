import { Component, OnInit } from '@angular/core';

import { ArticuloService } from 'src/app/services/articulo.service';

import { Articulo } from 'src/app/models/articulo';

import { Global } from 'src/app/services/global';

//importamos router para recoger parametros por la url
import { Router, ActivatedRoute, Params } from '@angular/router';

import { throwError } from 'rxjs';

@Component({
  selector: 'app-mostrararticulo',
  templateUrl: './mostrararticulo.component.html',
  styleUrls: ['./mostrararticulo.component.css'],
  providers: [ArticuloService]
})
export class MostrararticuloComponent implements OnInit {

  //Definir la variable articulo con ! (definite assignment assertion)
  //esto hace que TypeScript considere esta variable como asignada, aunque no lo detecte
  public articulo!: Articulo;

  public url: string;

  constructor(
    private _articuloService: ArticuloService,

    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
   }

  ngOnInit() {
    //Subscribe para suscribirnos al observable y obtener variable params
    this._route.params.subscribe(params => {
      let id = params['id'];


      this._articuloService.getArticulo(id).subscribe(
        response => {
          if (response.articulo) {
            this.articulo = response.articulo;
            console.log(this.articulo);
          } else {
            this._router.navigate(['/Inicio']);
          }
        },
        () => {
          alert("error 404. Articulo no existe");
          this._router.navigate(['/Inicio']);
        }
      )
    });
  }

}
