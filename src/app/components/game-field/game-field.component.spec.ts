import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {GameFieldComponent} from './game-field.component';

describe('GameFieldComponent', () => {
  let component: GameFieldComponent;
  let fixture: ComponentFixture<GameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('When I click a field a toggleField function is called', () => {
    let field = fixture.debugElement.query(By.css('button'));
    let toggleSpy = spyOn(component, 'toggleField');

    field.triggerEventHandler('click', null);

    expect(toggleSpy).toHaveBeenCalledTimes(1);
  });

  it('When First Player click a field an "x" sign is displayed in the field', () => {
    let field = fixture.debugElement.query(By.css('button'));

    component.firstPlayer = true;
    field.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(field.nativeElement.innerText).toEqual('x');
  });

  it(`When Second Player click a field an "o" sign is displayed in the field`, () => {
    let field = fixture.debugElement.query(By.css('button'));

    component.firstPlayer = false;
    field.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(field.nativeElement.innerText).toEqual('o');
  });

  it('If First player clicked again on the same button, dont change the value', () => {
    let field = fixture.debugElement.query(By.css('button'));

    component.firstPlayer = true;
    component.value = 'o';

    field.triggerEventHandler('click', null);
    component.firstPlayer = false;
    fixture.detectChanges();

    expect(field.nativeElement.innerText).toEqual('o');
  });

  it('If Second player clicked again on the same button, dont change the value', () => {
    let field = fixture.debugElement.query(By.css('button'));

    component.firstPlayer = false;
    component.value = 'x';

    field.triggerEventHandler('click', null);
    component.firstPlayer = true;
    fixture.detectChanges();

    expect(field.nativeElement.innerText).toEqual('x');
  });
});
