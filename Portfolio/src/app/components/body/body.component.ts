import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  perfilPhoto:string = "http://placeimg.com/2000/2000/any"; 
  perfilBanner:string = "http://placeimg.com/2000/2000/any";
  perfilNombre:string = "Alan Bonnet";
  perfilAcercaDe:string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque mollitia, odio impedit tempora voluptatum, eius optio fugit omnis consequuntur laboriosam?";
  constructor() { }

  ngOnInit(): void {
  }

}
