/* tslint:disable:no-unused-variable */

import { GameLogicService } from './game-logic.service';
import { winningGameMoves } from './winning-conditions';

describe('Service: GameLogic', () => {
  let gameLogicService: GameLogicService;
  beforeEach(() => {
    gameLogicService = new GameLogicService();
  });

  describe('there should be no winner', () => {
    it('when the board is empty', () => {
      const board = ['', '', '', '', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual(null);
    });
    it('when there are less than three x symbols on board', () => {
      let board = ['x', '', '', '', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual(null);
      board = ['x', 'x', '', '', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual(null);
      // // all possibilities with two x on board
      // const board = ['', '', '', '', '', '', '', '', ''];
      // const boards = []
      // for(let i = 0; i < board.length; i++) {
      //   for(let j=0; j < board.length; j ++) {
      //     let newBoard = [...board];
      //     newBoard[i] ='x';
      //     newBoard[j] = 'x';
      //     boards.push(newBoard);
      //   }
      // }
    });
    it("when there are three x symbols but they don't meet the winning conditions", () => {
      const board = ['x', 'o', 'x', 'x', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual(null);
    });
    it("when there are three o symbols but they don't meet the winning conditions", () => {
      const board = ['o', 'x', 'o', 'o', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual(null);
    });
    it('when there are less than three o symbols on board', () => {
      let board = ['o', '', '', '', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual(null);
      board = ['o', 'o', '', '', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual(null);
    });
  });
  describe('x should be the winner', () => {
    it('when winning conditions are met', () => {
      const board = ['x', 'x', 'x', '', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual('x');
    });
    describe('when the board is', () => {
      const board = ['', '', '', '', '', '', '', '', ''];
      let newBoard = [];
      winningGameMoves.forEach((winningMoves) => {
        newBoard = [...board];
        winningMoves.forEach((move) => (newBoard[move] = 'x'));
        it(`${newBoard}`, () => {
          expect(gameLogicService.getWinner(newBoard)).toEqual('x');
        });
      });
    });
  });

  describe('o should be a winner', () => {
    it('when there are three os in the row', () => {
      const board = ['o', 'o', 'o', '', '', '', '', '', ''];
      expect(gameLogicService.getWinner(board)).toEqual('o');
    });
    describe('when the board is', () => {
      const board = ['', '', '', '', '', '', '', '', ''];
      let newBoard = [];
      winningGameMoves.forEach((winningMoves) => {
        newBoard = [...board];
        winningMoves.forEach((move) => (newBoard[move] = 'o'));
        it(`${newBoard}`, () => {
          expect(gameLogicService.getWinner(newBoard)).toEqual('o');
        });
      });
    });
  });
});
