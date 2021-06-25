import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstPlayer = true;

  togglePlayer(): void {
    this.firstPlayer = !this.firstPlayer;
  }

  title = 'ttt-tdd';
}
