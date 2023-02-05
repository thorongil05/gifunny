import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from 'src/app/model/gif';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() gif : Gif | undefined 

  @Output() exitEventEmitter = new EventEmitter<boolean>()

  public exit() {
    this.exitEventEmitter.emit(true)
  }

}
