import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opps } from './opps';

describe('Opps', () => {
  let component: Opps;
  let fixture: ComponentFixture<Opps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opps],
    }).compileComponents();

    fixture = TestBed.createComponent(Opps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
