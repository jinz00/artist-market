import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcolatorePagaSempliceComponent } from './calcolatore-paga-semplice.component';

describe('CalcolatorePagaSempliceComponent', () => {
  let component: CalcolatorePagaSempliceComponent;
  let fixture: ComponentFixture<CalcolatorePagaSempliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcolatorePagaSempliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcolatorePagaSempliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
