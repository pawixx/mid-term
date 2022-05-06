import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    component.receive = 1;
    fixture.detectChanges();
  });

  it('should call compute method every time ngOnChanges is called', () => {
    const spy = spyOn(component, 'compute').and.callThrough();
    component.ngOnChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should add and store the result in variable result', () => {
    component.ngOnChanges();
    component.receive = {
      first: 1,
      second: 2,
      op: 1,
    };
    fixture.detectChanges();
    component.compute();
    expect(component.result).toBe(3);
  });

  it('should subtract and store the result in variable result', () => {
    component.ngOnChanges();
    component.receive = {
      first: 1,
      second: 2,
      op: 2,
    };
    fixture.detectChanges();
    component.compute();
    expect(component.result).toBe(-1);
  });

  it('should divide and store the result in variable result', () => {
    component.ngOnChanges();
    component.receive = {
      first: 1,
      second: 2,
      op: 3,
    };
    fixture.detectChanges();
    component.compute();
    expect(component.result).toBe(0.5);
  });
  
  it('should multiply and store the result in variable result', () => {
    component.ngOnChanges();
    component.receive = {
      first: 1,
      second: 2,
      op: 4,
    };
    fixture.detectChanges();
    component.compute();
    expect(component.result).toBe(2);
  });

  it('should display the result', () => {
    component.ngOnChanges();
    component.receive = {
      first: 1,
      second: 2,
      op: 1,
    };
    fixture.detectChanges();
    component.compute();
    expect(component.result).toBe(3);
  });
});