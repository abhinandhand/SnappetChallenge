import { TestBed } from '@angular/core/testing';

import { AutoSuggestionService } from './auto-suggestion.service';

describe('AutoSuggestionService', () => {
  let service: AutoSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
