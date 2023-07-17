import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcolatoriComponent } from './calcolatori.component';

describe('CalcolatoriComponent', () => {
  let component: CalcolatoriComponent;
  let fixture: ComponentFixture<CalcolatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcolatoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcolatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
