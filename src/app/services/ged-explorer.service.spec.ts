import { TestBed } from '@angular/core/testing';

import { GedExplorerService } from './ged-explorer.service';

describe('GedExplorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GedExplorerService = TestBed.get(GedExplorerService);
    expect(service).toBeTruthy();
  });
});
