import { Produto } from '../domain/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

import { MessageService } from 'primeng/api';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { FormArrayName, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-painel-produto',
  templateUrl: './painel-produto.component.html',
  styleUrls: ['./painel-produto.component.css']
})
export class PainelProdutoComponent implements OnInit {

  produto = <Produto>{};
  produtoEditar = <Produto>{};
  produtos = [];
  modalEditar: boolean;
  modalDetahles: boolean;
  modalDelete: boolean;
  formularioProduto: FormGroup;
  produtoDelete = <Produto>{};
  produtosFiltroCategoria = [];
  categoria: String;

  constructor(
    private produtoService: ProdutoService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.consultarAll();
    this.criarFormularioProduto();
  }

  enviarDados() {
    console.log(this.formularioProduto.value);
  }

  //Criar validações
  criarFormularioProduto() {
    this.formularioProduto = this.formBuilder.group({
      id: [''],
      codigo_barras: [''],
      nome: [''],
      descricao: [''],
      quantidade: [''],
      categoria: ['']
    });
  }

  btnEditar(produto: Produto) {
    this.produtoEditar = produto;
    this.modalEditar = true;
  }

  btnDelete(produto: Produto) {
    this.produtoDelete = produto;
    this.modalDelete = true;
  }

  btnCancelarEditar() {
    this.modalEditar = false;
  }

  btnCancelarDelete() {
    this.modalDelete = false;
  }

  consultarAll() {
    this.produtoService.index()
      .subscribe(resposta => this.produtos = <any>resposta);
  }

  filtrarCategoria(categoria: String) {
    this.produtoService.findByCategorias(categoria)
      .subscribe(resposta => this.produtos = <any>resposta);
  }

  remover(id: any) {
    this.produtoService.delete(id)
      .subscribe(() => {
        this.btnCancelarDelete();
        this.consultarAll();

        this.messageService.add({
          severity: 'success',
          summary: 'Produto removido com sucesso.'
        });
      },

        resposta => {
          let msg = 'Erro inesperado. Tente novamente.';

          if (resposta.error.message) {
            msg = resposta.error.message;
          }

          this.messageService.add({
            severity: 'error',
            summary: msg
          });
        }
      );
  }

  adicionar(produto: Produto) {
    this.produtoService.create(produto)
      .subscribe(() => {
        this.consultarAll();
        this.produto = <Produto>{};

        this.messageService.add({
          severity: 'success',
          summary: 'Produto cadastrada com sucesso.'
        });
      },

        resposta => {
          let msg = 'Erro inesperado. Tente novamente.';

          if (resposta.error.message) {
            msg = resposta.error.message;
          }

          /*
          if (resposta.error.message) {
            if (resposta.error.code == 400) {
              msg = "Favor preencher os campos do formulário";
            }
            else { msg = resposta.error.message; }
          }
          */


          this.messageService.add({
            severity: 'error',
            summary: msg
          });
        });
  }

  update(produto: Produto) {
    this.produtoEditar = produto;
    this.produtoService.update(this.produtoEditar)
      .subscribe(() => {
        this.consultarAll();
        this.btnCancelarEditar();

        this.messageService.add({
          severity: 'success',
          summary: 'Produto atualizado com sucesso.'
        });
      },

        resposta => {
          let msg = 'Erro inesperado. Tente novamente.';

          if (resposta.error.message) {
            msg = resposta.error.message;
          }

          this.messageService.add({
            severity: 'error',
            summary: msg
          });
        });
  }

  show(id: bigint) {
    this.produtoService.show(id).subscribe(() => {
      this.produtoEditar;
    });
  }

}
