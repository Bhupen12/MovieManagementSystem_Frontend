import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorMgmtComponent } from './actor-mgmt.component';

describe('ActorMgmtComponent', () => {
  let component: ActorMgmtComponent;
  let fixture: ComponentFixture<ActorMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
