import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hibernate } from './hibernate';

describe('Hibernate', () => {
  let component: Hibernate;
  let fixture: ComponentFixture<Hibernate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hibernate],
    }).compileComponents();

    fixture = TestBed.createComponent(Hibernate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
