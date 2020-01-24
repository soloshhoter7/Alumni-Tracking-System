import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegePortalComponent } from './college-portal.component';

describe('CollegePortalComponent', () => {
  let component: CollegePortalComponent;
  let fixture: ComponentFixture<CollegePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
