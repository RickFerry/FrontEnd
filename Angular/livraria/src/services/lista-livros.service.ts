import { Livro } from './../app/model/Livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaLivrosService {

  private url = 'https://ts-scel.herokuapp.com/api/v1/livros';

constructor(private httpClient: HttpClient) {}

  buscaLivros(): Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(this.url);
  }

}
