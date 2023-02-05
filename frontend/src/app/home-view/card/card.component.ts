import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from 'src/app/model/gif';
import { ContextService } from 'src/app/services/context-service/context.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() gif : Gif | undefined 

  @Output() exitEventEmitter = new EventEmitter<boolean>()

  constructor(private contextService : ContextService) {}

  public exit() {
    this.exitEventEmitter.emit(true)
  }

  public addToFavourites() {
    if (this.gif) {
      this.contextService.addFavourite(this.gif)
    }
  }

}
