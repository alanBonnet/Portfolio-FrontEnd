import { Component, OnInit } from '@angular/core';
import { perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  perfil:perfil = new perfil("","","","","","","","","","","");
  facebook:string = "";
  listSocial:string = "nav-item visually-hidden";
  classLiFb:string = this.listSocial;
  classLiIG:string = this.listSocial;
  classLiLinkd:string = this.listSocial;
  classLiTw:string = this.listSocial;
  classLiUrlPropio:string = this.listSocial;
  isLogged:boolean = false;
  constructor(private perfilSv:PerfilService) { }

  ngOnInit(): void {
    this.perfilSv.getPerfil().subscribe(data =>{this.perfil = data})
    setTimeout(()=>{
      this.existeRedSocial();
      },5000)
  }
  existeRedSocial(){
    if ((this.perfil.facebook) != null){
      this.classLiFb = "nav-item"
    }
    if ((this.perfil.instragram) != null){
      this.classLiIG = "nav-item"
    }
    if ((this.perfil.linkedin) != null){
      this.classLiLinkd = "nav-item"
    }
    if ((this.perfil.urlWeb) != null){
      this.classLiUrlPropio = "nav-item"
    }
    if ((this.perfil.twitter) != null){
      this.classLiTw = "nav-item"
    }
    
  }
}

