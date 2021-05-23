import { Livro } from './../app/model/Livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaLivrosService {

  private url: string;

constructor(private httpClient: HttpClient) {
  this.url = "https://ts-scel.herokuapp.com/api/v1/livros";
}

  buscaLivros(): Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(this.url);
  }
}
