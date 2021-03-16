import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sas-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  /**Referencia o código do arquivo painel.component.html */
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
