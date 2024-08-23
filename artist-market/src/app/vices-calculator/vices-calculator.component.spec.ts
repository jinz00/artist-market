import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VicesCalculatorComponent } from './vices-calculator.component';

describe('VicesCalculatorComponent', () => {
  let component: VicesCalculatorComponent;
  let fixture: ComponentFixture<VicesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VicesCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VicesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
