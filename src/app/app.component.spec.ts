import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
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
      const fields = fixture.debugElement.queryAll(By.css('app-game-field'));
      expect(fields.length).toEqual(9);
    });

  });
});
