import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingLegacySectionComponent } from './building-legacy-section.component';

describe('BuildingLegacySectionComponent', () => {
  let component: BuildingLegacySectionComponent;
  let fixture: ComponentFixture<BuildingLegacySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingLegacySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingLegacySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
