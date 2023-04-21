import { TestBed } from '@angular/core/testing';

import { TransaccionalityService } from './transaccionality.service';

describe('TransaccionalityService', () => {
  let service: TransaccionalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
