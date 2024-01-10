export class Despesa {

  Id: number;
  Nome:string;
  Valor: number;
  Ano: number;
  Mes: number;
  TipoDespesa: number;
  DataCadastro: Date;
  DataAlteracao: Date;
  DataPagamento: Date;
  DataVencimento: Date;
  Pago: boolean;
  DespesaAtrasada: boolean;
  IdCategoria: number;
}

