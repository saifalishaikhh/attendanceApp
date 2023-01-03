import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAttendanceReportComponent } from './user-attendance-report.component';

describe('UserAttendanceReportComponent', () => {
  let component: UserAttendanceReportComponent;
  let fixture: ComponentFixture<UserAttendanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAttendanceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAttendanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
