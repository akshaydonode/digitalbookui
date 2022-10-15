import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notofication.service';

describe('NotoficationService', () => {
  let service: NotoficationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
