import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spring } from './spring';

describe('Spring', () => {
  let component: Spring;
  let fixture: ComponentFixture<Spring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spring],
    }).compileComponents();

    fixture = TestBed.createComponent(Spring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
