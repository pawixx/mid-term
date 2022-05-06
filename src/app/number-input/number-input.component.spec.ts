import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should emit firstNumber if numberInput function is called and the is input is in first field', () => {
    const spy = spyOn(component.firstNumber, 'emit').and.callThrough();
    fixture.detectChanges();
    component.numberInput('1', 0);
    expect(spy).toHaveBeenCalledWith({ value: 1, which: 0 });
  });

  it('should  emit secondNumber if numberInput function is called and the is input is in second field', () => {
    const spy = spyOn(component.secondNumber, 'emit').and.callThrough();
    fixture.detectChanges();
    component.numberInput('1', 1);
    expect(spy).toHaveBeenCalledWith({ value: 1, which: 1 });
  });
})