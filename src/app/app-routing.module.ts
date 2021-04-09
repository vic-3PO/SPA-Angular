import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { JediComponent } from './jedi/jedi.component';
import { PadawanComponent } from './padawan/padawan.component';
import { PerfilComponent } from './Perfil/Perfil.component';

const routes: Routes = [
  {path: '', redirectTo:'Dashboard', pathMatch: 'full'},
  {path: 'jedi', component:JediComponent},
  {path: 'padawan', component:PadawanComponent},
  {path: 'Perfil', component:PerfilComponent},
  {path: 'Dashboard', component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
