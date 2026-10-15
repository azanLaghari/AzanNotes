import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSP } from './j-sp';

describe('JSP', () => {
  let component: JSP;
  let fixture: ComponentFixture<JSP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JSP],
    }).compileComponents();

    fixture = TestBed.createComponent(JSP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
