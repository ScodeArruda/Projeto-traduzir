import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'


@Component({
  selector: 'sas-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase abaixo'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 4

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  /** Metodo construtor */
  constructor() {

    this.atualizaRodada()

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  /** Função para atualizar a resposta*/
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value

  }

  /** Função para verificar resposta */
  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {

      // Trocar pergunta da resposta
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      /** Verificar total de acertos*/
      if (this.rodada === 4) {

        this.encerrarJogo.emit('vitoria')

      }

      /**Atualiza rodada */
      this.atualizaRodada()

    } else {

      // alert('A tradução esta errada')
      /**Diminuir a variavel tentativas */
      this.tentativas--

      if (this.tentativas === -1) {

        this.encerrarJogo.emit('derrota')

      }

    }

  }

  /** Metodo atualiza o objeto rodadaFrase */
  public atualizaRodada(): void {

    this.rodadaFrase = this.frases[this.rodada]
    /**Limpar o campo de resposta */
    this.resposta = ''

  }

}
