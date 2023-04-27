import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorConformBtnComponent } from './director-conform-btn.component';

describe('DirectorConformBtnComponent', () => {
  let component: DirectorConformBtnComponent;
  let fixture: ComponentFixture<DirectorConformBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorConformBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorConformBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
