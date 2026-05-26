import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Gif } from '../../model/gif';
import { ContextService } from '../../services/context-service/context.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [MatCardModule, MatIconModule],
})
export class CardComponent {
  @Input() gif: Gif | undefined;

  @Output() exitEventEmitter = new EventEmitter<boolean>();

  constructor(private readonly contextService: ContextService) {}

  public exit() {
    this.exitEventEmitter.emit(true);
  }

  public addToFavourites() {
    if (this.gif) {
      this.contextService.addFavourite(this.gif);
    }
  }
}
