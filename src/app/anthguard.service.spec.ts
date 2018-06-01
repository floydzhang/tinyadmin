import { TestBed, inject } from '@angular/core/testing';

import { AnthguardService } from './anthguard.service';

describe('AnthguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnthguardService]
    });
  });

  it('should be created', inject([AnthguardService], (service: AnthguardService) => {
    expect(service).toBeTruthy();
  }));
});
