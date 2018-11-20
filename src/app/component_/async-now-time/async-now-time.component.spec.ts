import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncNowTimeComponent } from './async-now-time.component';

describe('AsyncNowTimeComponent', () => {
  let component: AsyncNowTimeComponent;
  let fixture: ComponentFixture<AsyncNowTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncNowTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncNowTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
