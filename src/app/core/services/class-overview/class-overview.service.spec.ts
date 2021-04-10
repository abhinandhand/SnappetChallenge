import { TestBed } from '@angular/core/testing';

import { ClassOverviewService } from './class-overview.service';

describe('ClassOverviewService', () => {
  let service: ClassOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
