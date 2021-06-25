import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent implements OnInit {
  @Output() click = new EventEmitter<void>();
  @Input() firstPlayer: boolean;

  value = '';

  constructor() {}

  ngOnInit(): void {}

  toggleField(): void {
    this.value = this.firstPlayer ? 'x' : 'o';
    this.click.emit();
  }
}
