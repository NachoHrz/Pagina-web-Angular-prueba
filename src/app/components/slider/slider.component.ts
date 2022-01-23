import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  //Asi se define un valor que va a ser recogido desde el componente padre
  @Input() nombre: string="";
  @Input() size: string="";

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
