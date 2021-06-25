import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent implements OnInit {

  value ='';

  constructor() {}

  ngOnInit(): void {}

  toggleField() {
    this.value = 'x';
  }
}
