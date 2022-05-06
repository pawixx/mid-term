import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('Bering, Simple Calculator Midterm Exam', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set the first number if which is 0' , () => {
    component.receiveFromInput({which: 0, value: 1});
    fixture.detectChanges();
    expect(component.firstNumber).toBe(1);
  });

  it('should set the second number if which is 1' , () => {
    component.receiveFromInput({which: 1, value: 1});
    fixture.detectChanges();
    expect(component.secondNumber).toBe(1);
  });

  it('should set the operation ' , () => {
    component.receiveOperation(1);
    fixture.detectChanges();
    expect(component.selectedOperation).toBe(1);
  });

  it('should send the value to the parent component' , () => {
    component.sendValue();
    fixture.detectChanges();
    expect(component.value).toEqual({
      first: component.firstNumber,
      second: component.secondNumber,
      op: component.selectedOperation,
    });
  });

  it('should show the ngBlock' , () => {
    component.operation = true;
    component.firstNumber = 1;
    component.secondNumber = 1;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#ng-block'))).not.toBeNull();
  });

  it('should not show the ngBlock' , () => {
    component.operation = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#ng-block'))).toBeNull();
  });


});