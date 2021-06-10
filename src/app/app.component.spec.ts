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
  });
});
