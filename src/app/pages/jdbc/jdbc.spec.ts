import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jdbc } from './jdbc';

describe('Jdbc', () => {
  let component: Jdbc;
  let fixture: ComponentFixture<Jdbc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jdbc],
    }).compileComponents();

    fixture = TestBed.createComponent(Jdbc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
