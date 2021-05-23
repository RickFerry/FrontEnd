import { Livro } from './../app/model/Livro';

import { Component, OnInit } from '@angular/core';
import { ListaLivrosService } from './../services/lista-livros.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  livros: Livro[];

  constructor(private service: ListaLivrosService) {
    this.livros = [];
  }

  ngOnInit() {
    this.service.buscaLivros().subscribe((livros: Livro[]) => {
      console.table(livros);
      this.livros = livros;
    })
  }
}
