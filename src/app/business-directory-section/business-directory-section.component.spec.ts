import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDirectorySectionComponent } from './business-directory-section.component';

describe('BusinessDirectorySectionComponent', () => {
  let component: BusinessDirectorySectionComponent;
  let fixture: ComponentFixture<BusinessDirectorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDirectorySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDirectorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
