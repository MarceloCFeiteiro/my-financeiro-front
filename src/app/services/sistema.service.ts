import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";
import { SistemaFinanceiro } from "../models/SistemaFinanceiro";


@Injectable({
  providedIn: 'root'
})

export class SistemaService {

  private readonly baseURL = environment["endPoint"];

  constructor(private httpClient: HttpClient) { }

  AdicionarSistemaFinanceiro(sistemaFinanceiro: SistemaFinanceiro) {
    return this.httpClient.post<SistemaFinanceiro>(`${this.baseURL}/AdicionarSistemaFinanceiro`, sistemaFinanceiro)
  }

  CadastarUsuarioSistema(idSistema: number, emailUsuario: string) {
    return this.httpClient.post<any>(`${this.baseURL}/CadastarUsuarioSistema?idSistema=${idSistema}&emailUsuario=${emailUsuario}`, null)
  }

  ListarSitemaUsuario(emailUsuario: string) {
    return this.httpClient.get(`${this.baseURL}/ListarSitemaUsuario?emailUsuario=${emailUsuario}`)
  }
}
