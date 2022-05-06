import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationComponent } from './operation.component';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit value when button is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const spy = spyOn(component.operation, 'emit').and.callThrough();
    button.click();
    expect(spy).toHaveBeenCalledWith(1);
  });
});