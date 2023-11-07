import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedblogsComponent } from './reportedblogs.component';

describe('ReportedblogsComponent', () => {
  let component: ReportedblogsComponent;
  let fixture: ComponentFixture<ReportedblogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportedblogsComponent]
    });
    fixture = TestBed.createComponent(ReportedblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
