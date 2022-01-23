import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from "./components/inicio/inicio.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ArticuloComponent } from "./components/articulo/articulo.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { FaqComponent } from "./components/faq/faq.component";
import { JuegosComponent } from "./components/juegos/juegos.component";
import { MostrararticuloComponent } from './components/mostrararticulo/mostrararticulo.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [ 
    {path: '', component: InicioComponent},
    {path: 'Inicio', component: InicioComponent},
    {path: 'Blog', component: BlogComponent},
    //Duplicamos el path de articulo para poder acceder a el con o sin id
    {path: 'Articulos', component: ArticuloComponent},
    {path: 'Blog/articulo/:id', component: MostrararticuloComponent},
    {path: 'Formulario', component: FormularioComponent},
    {path: 'Formulario/:name', component: FormularioComponent},
    {path: 'Faq', component: FaqComponent},
    {path: 'juegos', component: JuegosComponent},
    //La ruta de error tiene que ser  la ultima en cargar
    {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }