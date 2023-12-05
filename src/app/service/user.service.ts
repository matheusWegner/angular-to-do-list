import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/User';
import { TokenService } from './token.service';
import {jwtDecode} from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/enviroments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuarioSubject = new BehaviorSubject<User>(new User());
  constructor(private tokenService: TokenService,
              private http: HttpClient) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }
 
  url = environment.URL_LOCAL;

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const usuario = jwtDecode(token) as User;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.usuarioSubject.next(new User());
  }

  estaLogado() {
    return this.tokenService.hasToken();
  }

  getImg() {
    return this.http.get(this.url + 'user/getImg');
  }
}
