import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedcomponentsiblingComponent } from './nestedcomponentsibling.component';

describe('NestedcomponentsiblingComponent', () => {
  let component: NestedcomponentsiblingComponent;
  let fixture: ComponentFixture<NestedcomponentsiblingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedcomponentsiblingComponent]
    });
    fixture = TestBed.createComponent(NestedcomponentsiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
