import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from 'src/app/model/gif';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    standalone: false
})
export class GridComponent {

  @Input() gifs : Gif[] = []

  @Output() gifClickedEvent : EventEmitter<number> = new EventEmitter<number>()

  public onGifClick(position: number) {
    this.gifClickedEvent.emit(position)
  }

}
