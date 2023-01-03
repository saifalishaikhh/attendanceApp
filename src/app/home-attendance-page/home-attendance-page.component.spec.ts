import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAttendancePageComponent } from './home-attendance-page.component';

describe('HomeAttendancePageComponent', () => {
  let component: HomeAttendancePageComponent;
  let fixture: ComponentFixture<HomeAttendancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAttendancePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAttendancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
