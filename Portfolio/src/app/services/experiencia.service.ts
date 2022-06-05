import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  experienciaTitle:string="Front End Developer WebStatic";
  experienciaContent:string = "Estuve trabajando con una empresa como FronEnd developer en el maquetado de paginas estáticas para su posterior modificación, yo hacía el diseño inicial.";
  experienciaAnios:number = 2;
  experienciaTitle2:string="Front End Developer con Angular";
  experienciaContent2:string = "Un tiempo estuve trabajando como Fron End Developer con Angular, recibia el maquetado completo de la página y yo la volvía dinámica y conectaba con el backend";
  experienciaAnios2:number = 3;
  experienciaTitle3:string="Back End Developer con Java/SpringBoot";
  experienciaContent3:string = "Por ultimo estuve trabajando hasta la actualidad diseñando la api de empresas y sus conexiones como otras y la conexión con la base de datos";
  experienciaAnios3:number = 5;
  constructor() { }
}
