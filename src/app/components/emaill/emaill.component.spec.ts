import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaillComponent } from './emaill.component';

describe('EmaillComponent', () => {
  let component: EmaillComponent;
  let fixture: ComponentFixture<EmaillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmaillComponent]
    });
    fixture = TestBed.createComponent(EmaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
