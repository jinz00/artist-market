import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatoriComponent } from './comparatori.component';

describe('ComparatoriComponent', () => {
  let component: ComparatoriComponent;
  let fixture: ComponentFixture<ComparatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparatoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
