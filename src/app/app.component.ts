import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstPlayer = true;

  title = 'ttt-tdd';

  togglePlayer(): void {
    this.firstPlayer = !this.firstPlayer;
    this.setGameEndClassList();
  }

  setGameEndClassList(): void {
    document.querySelector('.app-game-turn').classList.add('game-ended');
  }
}
