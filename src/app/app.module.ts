import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Para usar formularios de react importar FormsModule
import { FormsModule } from '@angular/forms';

//Para usar peticiones ajax
import { HttpClientModule } from '@angular/common/http';

//Modulo de angular2-moment. libreria de pipes para formatear fecha
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { AppRoutingModule } from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { JuegoComponent } from './components/juego/juego.component';

import { EsParPipe } from './pipes/espar.pipe';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MostrararticuloComponent } from './components/mostrararticulo/mostrararticulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SiderbarComponent,
    FooterComponent,
    InicioComponent,
    ArticuloComponent,
    BlogComponent,
    FaqComponent,
    FormularioComponent,
    ErrorComponent,
    JuegosComponent,
    JuegoComponent,
    EsParPipe,
    ArticulosComponent,
    MostrararticuloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
