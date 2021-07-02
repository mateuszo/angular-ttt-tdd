import { Component } from '@angular/core';
import { winningGameMoves } from './winning-conditions';

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
    this.moves.firstPlayer.sort((a, b) => a - b);
    this.moves.secondPlayer.sort((a, b) => a - b);

    winningGameMoves.forEach((winningMoves: Array<number>) => {
      if (
        JSON.stringify(winningMoves) === JSON.stringify(this.moves.firstPlayer)
      ) {
        this.setGameEndClassList();
      }
      if (
        JSON.stringify(winningMoves) === JSON.stringify(this.moves.secondPlayer)
      ) {
        this.setGameEndClassList();
      }
    });
  }
}
