import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMgmtComponent } from './director-mgmt.component';

describe('DirectorMgmtComponent', () => {
  let component: DirectorMgmtComponent;
  let fixture: ComponentFixture<DirectorMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
