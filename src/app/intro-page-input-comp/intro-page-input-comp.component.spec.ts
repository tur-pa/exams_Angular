import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPageInputCompComponent } from './intro-page-input-comp.component';

describe('IntroPageInputCompComponent', () => {
  let component: IntroPageInputCompComponent;
  let fixture: ComponentFixture<IntroPageInputCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroPageInputCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroPageInputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
