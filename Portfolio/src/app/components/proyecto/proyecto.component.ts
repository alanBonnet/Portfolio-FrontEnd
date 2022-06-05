import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoImg:string = "http://placeimg.com/2000/2000/any"
  constructor() { }

  ngOnInit(): void {
  }

}
