/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaLivrosService } from './lista-livros.service';

describe('Service: ListaLivros', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaLivrosService]
    });
  });

  it('should ...', inject([ListaLivrosService], (service: ListaLivrosService) => {
    expect(service).toBeTruthy();
  }));
});
