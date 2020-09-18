import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesLanguagesComponent } from './activities-languages.component';

describe('ActivitiesLanguagesComponent', () => {
  let component: ActivitiesLanguagesComponent;
  let fixture: ComponentFixture<ActivitiesLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
