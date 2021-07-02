import { Component } from '@angular/core';
import { GameLogicService } from './game-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstPlayer = true;

  title = 'ttt-tdd';

  range = Array(9);
  fields = Array.from(Array(9)).map((_) => '');

  moves = {
    firstPlayer: [],
    secondPlayer: [],
  };

  constructor(private gameLogic: GameLogicService) {}

  togglePlayer(fieldIndex: number): void {
    if (this.firstPlayer) {
      this.moves.firstPlayer.push(fieldIndex);
      this.fields[fieldIndex] = 'x';
    } else {
      this.moves.secondPlayer.push(fieldIndex);
      this.fields[fieldIndex] = 'o';
    }
    this.firstPlayer = !this.firstPlayer;
    this.checkWiningConditions();
  }

  setGameEndClassList(): void {
    document.querySelector('.app-game-turn').classList.add('game-ended');
  }

  private checkWiningConditions(): void {
    const winner = this.gameLogic.getWinner(this.fields);
    if (['x', 'o'].includes(winner)) {
      this.setGameEndClassList();
    }
  }
}
