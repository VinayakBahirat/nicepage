import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPeopleSectionComponent } from './team-people-section.component';

describe('TeamPeopleSectionComponent', () => {
  let component: TeamPeopleSectionComponent;
  let fixture: ComponentFixture<TeamPeopleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPeopleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPeopleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
