import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFrameWork } from './collection-frame-work';

describe('CollectionFrameWork', () => {
  let component: CollectionFrameWork;
  let fixture: ComponentFixture<CollectionFrameWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionFrameWork],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionFrameWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
