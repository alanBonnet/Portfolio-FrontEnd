import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysSkillsComponent } from './components/hys-skills/hys-skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';

import {HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/header/perfil/perfil.component';
import { FormAddComponent } from './components/experiencia/form-add/form-add.component';

/*Ng circle progress bar import*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    NavbarComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysSkillsComponent,
    ProyectoComponent,
    FooterComponent,
    PerfilComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
