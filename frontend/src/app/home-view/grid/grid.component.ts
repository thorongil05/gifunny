import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/model/gif';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() gifs : Gif[] = []

}
