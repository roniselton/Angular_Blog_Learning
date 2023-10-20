import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  titulo:string = "";
  @Input()
  foto:string = "/assets/sem_imagem.png";
  @Input()
  descricao:string = "as asdasd asd asd.";

}
