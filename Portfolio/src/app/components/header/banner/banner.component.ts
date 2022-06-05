import { Component, OnInit } from '@angular/core';
import { perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //perfil : PerfilSvService= new PerfilSvService;
  perfil:perfil = new perfil("","","","","","","","","","","");
  claseImgBanner:string="visually-hidden"
  constructor(public perfilSv : PerfilService) { }

  ngOnInit(): void {
    this.perfilSv.getPerfil().subscribe(data =>{this.perfil = data})
    setTimeout(()=>{
      this.claseImgBanner= "img-fluid p-2 bg-white rounded-top-25px"
    },6000)
  }
  public autoImgBanner(){
    return this.perfil.imgBanner ==null? 'http://placeimg.com/2000/1000/any':this.perfil.imgBanner;
  }
}
