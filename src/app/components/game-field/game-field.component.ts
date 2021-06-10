import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent implements OnInit {
  field: string;

  constructor() {}

  ngOnInit(): void {}

  toggleField() {
    this.field = 'x';
  }
}
