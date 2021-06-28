import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent {

  @Input()
  firstPlayer: boolean;

  @Output()
  onClick = new EventEmitter<void>();

  value = '';

  toggleField(): void {
    if (!this.value) {
      this.value = this.firstPlayer ? 'x' : 'o';
      this.onClick.emit();
    }
  }
}
