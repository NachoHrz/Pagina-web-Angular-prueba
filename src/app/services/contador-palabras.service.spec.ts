import { TestBed } from '@angular/core/testing';

import { ContadorPalabrasService } from './contadorPalabras.service';

describe('ContadorPalabrasService', () => {
  let service: ContadorPalabrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorPalabrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
