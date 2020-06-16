import { Produto } from './domain/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrlBase = 'http://localhost:8080/produtos/';

  constructor(private httpClient: HttpClient) { }

  index() {
    return this.httpClient.get(this.apiUrlBase);
  }

  create(produto: Produto) {
    return this.httpClient.post(this.apiUrlBase, produto);
  }

  delete(id: any) {
    return this.httpClient.delete(this.apiUrlBase + id);
  }

  update(produto: Produto) {
    return this.httpClient.put(this.apiUrlBase, produto);
  }

  show(id: bigint) {
    return this.httpClient.get(this.apiUrlBase + id);
  }

  findByCategorias(categoria: String) {
    return this.httpClient.get(this.apiUrlBase + "categoria/" + categoria)
  }

}
