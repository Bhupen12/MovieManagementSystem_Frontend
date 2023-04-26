import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorConformBtnComponent } from './actor-conform-btn.component';

describe('ActorConformBtnComponent', () => {
  let component: ActorConformBtnComponent;
  let fixture: ComponentFixture<ActorConformBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorConformBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorConformBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
