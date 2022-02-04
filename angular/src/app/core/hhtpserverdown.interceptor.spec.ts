import { TestBed } from '@angular/core/testing';

import { HhtpserverdownInterceptor } from './hhtpserverdown.interceptor';

describe('HhtpserverdownInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HhtpserverdownInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HhtpserverdownInterceptor = TestBed.inject(HhtpserverdownInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
