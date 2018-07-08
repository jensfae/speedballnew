import { TestBed, inject } from '@angular/core/testing';

import { VeranstaltungenSpeedballService } from './veranstaltungen-speedball.service';

describe('VeranstaltungenSpeedballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeranstaltungenSpeedballService]
    });
  });

  it('should be created', inject([VeranstaltungenSpeedballService], (service: VeranstaltungenSpeedballService) => {
    expect(service).toBeTruthy();
  }));
});
