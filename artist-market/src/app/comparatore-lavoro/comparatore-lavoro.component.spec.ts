import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatoreLavoroComponent } from './comparatore-lavoro.component';

describe('ComparatoreLavoroComponent', () => {
  let component: ComparatoreLavoroComponent;
  let fixture: ComponentFixture<ComparatoreLavoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparatoreLavoroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparatoreLavoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
