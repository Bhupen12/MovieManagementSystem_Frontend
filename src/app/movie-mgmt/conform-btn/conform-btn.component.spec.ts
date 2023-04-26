import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformBtnComponent } from './conform-btn.component';

describe('ConformBtnComponent', () => {
  let component: ConformBtnComponent;
  let fixture: ComponentFixture<ConformBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
