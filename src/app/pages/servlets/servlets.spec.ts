import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servlets } from './servlets';

describe('Servlets', () => {
  let component: Servlets;
  let fixture: ComponentFixture<Servlets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servlets],
    }).compileComponents();

    fixture = TestBed.createComponent(Servlets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
