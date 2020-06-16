export class Produto {

    constructor(id: bigint, codigo_barras: String, nome: String, descricao: String, quantidade: bigint, categoria: String) {
        this.id = id;
        this.codigo_barras = codigo_barras;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }

    id: bigint;

    codigo_barras: String;

    nome: String;

    descricao: String;

    quantidade: bigint;

    categoria: String;

}
