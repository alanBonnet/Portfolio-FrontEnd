import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
let botonLogin = document.getElementById('#botonLogin');
let collapseEvent = document.getElementById('#nb-toggler');
  if (collapseEvent?.offsetWidth == 0) {
    alert("aea mongol")
  }
