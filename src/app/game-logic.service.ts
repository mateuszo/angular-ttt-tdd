import { Injectable } from '@angular/core';
import { winningGameMoves } from './winning-conditions';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  getWinner(board: string[]): null | 'x' | 'o' {
    for (const winningMoves of winningGameMoves) {
      const winningFields = winningMoves.map((idx) => board[idx]);
      if (winningFields.every((field) => field === 'x')) {
        return 'x';
      }
      if (winningFields.every((field) => field === 'o')) {
        return 'o';
      }
    }
    // if (
    //   winningGameMoves.some((winningMoves) =>
    //     winningMoves.map((idx) => board[idx]).every((el) => el === 'x')
    //   )
    // ) {
    //   return 'x';
    // }
    // if (
    //   winningGameMoves.some((winningMoves) =>
    //     winningMoves.map((idx) => board[idx]).every((el) => el === 'o')
    //   )
    // ) {
    //   return 'o';
    // }
    return null;
  }
}
