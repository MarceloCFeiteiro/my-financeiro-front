import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private usuarioAutenticadoPortal: boolean = false;
  private token: any;
  private user: any;

  constructor(private httpClient: HttpClient) {

  }

  checkToken() {
    return Promise.resolve(true);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token
  }

  getToken() {
    this.token = localStorage.getItem('token');
    return this.token = this.token;
  }

  usuarioAutenticado(status: boolean) {
    localStorage.setItem('usuarioAutenticadoPortal', JSON.stringify(status));
    this.usuarioAutenticadoPortal = status;
  }

  usuarioEstaAutenticado(): Promise<boolean> {
    this.usuarioAutenticadoPortal = localStorage.getItem('usuarioAutenticadoPortal') == 'true';
    return Promise.resolve(this.usuarioAutenticadoPortal);
  }

  //Mudar o nome do método para limparTokenUser ou limparLocalStorageVariables
  limparToken() {
    this.token = null;
    this.user = null;
  }

  limparDadosUsuario() {
    this.usuarioAutenticado(false);
    this.limparToken();
    localStorage.clear();
    sessionStorage.clear();
  }

}
