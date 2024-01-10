import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";
import { Categoria } from "../models/Categoria";


@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  private readonly baseURL = environment["endPoint"];

  constructor(private httpClient: HttpClient) { }

  AdicionarCategoria(categoria: Categoria) {
    return this.httpClient.post<Categoria>(`${this.baseURL}/AdicionarCategoria`, categoria)
  }

  ListarCategoriasUsuario(emailUsuario: string) {
    return this.httpClient.get(`${this.baseURL}/ListarCategoriasUsuario?emailUsuario=${emailUsuario}`)
  }
}
