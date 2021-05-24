import { Observable } from 'rxjs';
import { Livro } from './../app/model/Livro';

import { Component, OnInit } from '@angular/core';
import { ListaLivrosService } from './../services/lista-livros.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  livros$: Observable<Livro[]> | undefined;

  constructor(private service: ListaLivrosService) {
  }

  ngOnInit() {
    this.livros$ = this.service.buscaLivros()
  }
}
