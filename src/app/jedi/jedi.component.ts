import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Jedi } from '../models/Jedi';

@Component({
  selector: 'app-jedi',
  templateUrl: './jedi.component.html',
  styleUrls: ['./jedi.component.css']
})
export class JediComponent implements OnInit {

  public titulo = 'Jedi';
  public jediSelecionado: Jedi;

  public jedis = [
    { id: 1, nome: 'Qui-Gon Jinn', email:'qui-gon@OrdemJedi.com' },
    { id: 2, nome: 'Obi-Wan Kenobi', email:'obi-wan@OrdemJedi.com' },
    { id: 3, nome: 'Yoda', email:'yoda@JediOrdem.com' },
    { id: 4, nome: 'Mace Windu', email:'mace@OrdemJedi.com' },
    { id: 5, nome: 'Luke Skywalker', email:'luke@OrdemJedi.com' },
  ]

  jediSelect(jedi: Jedi){
    this.jediSelecionado = jedi;
  }

  voltar(){
    this.jediSelecionado = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
