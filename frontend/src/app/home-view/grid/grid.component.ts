import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from '../../model/gif';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [MatGridListModule],
})
export class GridComponent {
  @Input() gifs: Gif[] = [];

  @Output() gifClickedEvent: EventEmitter<number> = new EventEmitter<number>();

  public onGifClick(position: number) {
    this.gifClickedEvent.emit(position);
  }
}
