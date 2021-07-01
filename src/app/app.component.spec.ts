import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { GameFieldComponent } from './components/game-field/game-field.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, GameFieldComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('As player', () => {
    it(`I want to see 9 empty fields`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const fields = fixture.debugElement.queryAll(
        By.css('app-game-field button')
      );
      expect(fields.length).toEqual(9);
      fields.forEach((field) => {
        expect(field.nativeElement.innerHTML).toEqual('');
      });
    });

    it('I want to see player turns', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const turnField = fixture.debugElement.query(By.css('.app-game-turn'));
      expect(turnField.nativeElement.innerHTML).toEqual('player x turn');
    });

    it('After click at "app-game-field" I want to see player "o" turn', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const turnField = fixture.debugElement.query(By.css('.app-game-turn'));
      const fields = fixture.debugElement.queryAll(
        By.css('app-game-field button')
      );
      fields[0].triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(turnField.nativeElement.innerHTML).toEqual('player o turn');
    });

    it('After fulfilling win condition I want to see that the game is over', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const fields = fixture.debugElement.queryAll(
        By.css('app-game-field button')
      );
      const turnField = fixture.debugElement.query(By.css('.app-game-turn'));

      fields[0].triggerEventHandler('click', null);
      fields[3].triggerEventHandler('click', null);
      fields[1].triggerEventHandler('click', null);
      fields[4].triggerEventHandler('click', null);
      fields[2].triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(
        turnField.nativeElement.classList.contains('game-ended')
      ).toBeTrue();
    });
    it('should check if there is no class `game-ended`', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const turnField = fixture.debugElement.query(By.css('.app-game-turn'));
      expect(
        turnField.nativeElement.classList.contains('game-ended')
      ).toBeFalse();
    });
  });
});
