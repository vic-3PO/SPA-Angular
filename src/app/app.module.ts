import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadawanComponent } from './padawan/padawan.component';
import { JediComponent } from './jedi/jedi.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [						
    AppComponent, 
    PadawanComponent, 
    JediComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
