import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCompListComponent } from './custom-comp-list.component';

describe('CustomCompListComponent', () => {
  let component: CustomCompListComponent;
  let fixture: ComponentFixture<CustomCompListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCompListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCompListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
