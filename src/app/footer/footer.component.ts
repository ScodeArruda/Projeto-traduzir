import { Component } from '@angular/core'

@Component({
  selector: 'sas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public footer: string = 'Testando seu conhecimento em Inglês'


  ngOnInit() {
  }
}