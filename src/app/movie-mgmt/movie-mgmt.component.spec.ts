import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMgmtComponent } from './movie-mgmt.component';

describe('MovieMgmtComponent', () => {
  let component: MovieMgmtComponent;
  let fixture: ComponentFixture<MovieMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
