import {TestBed} from '@angular/core/testing';

import {CustomCompListService} from './custom-comp-list.service';

describe('CustomCompListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomCompListService = TestBed.get(CustomCompListService);
    expect(service).toBeTruthy();
  });
});
