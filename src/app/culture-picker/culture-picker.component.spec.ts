import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturePickerComponent } from './culture-picker.component';

describe('CulturePickerComponent', () => {
  let component: CulturePickerComponent;
  let fixture: ComponentFixture<CulturePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
