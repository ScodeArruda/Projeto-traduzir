import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'sas-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  /**Metodo */
  @Input() public tentativas: number

  /**Metodo para adicionar corações */
  public coracoes: Coracao[] = [

    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),

  ]

  constructor() {
  }

  ngOnChanges() {

    /**This.tentativas */
    if (this.tentativas !== this.coracoes.length) {

      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit() {

  }

}
