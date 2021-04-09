import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Padawan } from '../models/Padawan';

@Component({
  selector: 'app-padawan',
  templateUrl: './padawan.component.html',
  styleUrls: ['./padawan.component.css']
})
export class PadawanComponent implements OnInit {

  public titulo = 'Padawans';
  public padawanSelecionado: Padawan;
  public simpletext: string;

  public padawans = [
    { id: 1, nome: 'Ahsoka Tano', email:'ahsoka@republicagalactica.com' },
    { id: 2, nome: 'Barriss Offee',email:'barriss@republicagalactica.com' },
    { id: 3, nome: 'Zett Jukassa', email:'zett@republicagalactica.com' },
    { id: 4, nome: 'Asajj Ventress', email:'asajj@republicagalactica.com' },
    { id: 5, nome: 'Bene', email:'bene@republicagalactica.com' },
    { id: 6, nome: 'Kanan Jarrus', email:'kanan@republicagalactica.com' },
    { id: 7, nome: 'Ezra Bridger', email:'Ezra@republicagalactica.com' },
  ]

  padawanSelect(padawan: Padawan){
    this.padawanSelecionado = padawan;
  }

  voltar(){
    this.padawanSelecionado = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
