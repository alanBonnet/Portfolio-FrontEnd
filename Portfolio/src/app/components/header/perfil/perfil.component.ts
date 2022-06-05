import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil:perfil = new perfil("","","","","","","","","","","");
  editPerfil:perfil | undefined;

  edit:boolean = false;
  @Input () value :string = "";
  claseImgPhoto:string = "visually-hidden";
  constructor(public perfilSv : PerfilService) { 

  }
  public editProfile():void{
    this.edit = !this.edit;
  }
  ngOnInit(): void {
    this.getPerfil();
   
    setTimeout(() => {
      this.claseImgPhoto = "img-fluid border border-white border-5 rounded-circle"
    }, 8000);
  }
  public autoImgPhoto():any{
    
    return this.perfil.imgPhoto ==null ? 'http://placeimg.com/2000/2000/any':this.perfil.imgPhoto;
  }
  public getPerfil():void{
    this.perfilSv.getPerfil().subscribe(data =>{this.perfil = data})
  }
}
