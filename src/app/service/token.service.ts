import { Injectable } from '@angular/core';

const KEY = 'Authorization';

@Injectable({
  providedIn: 'root',
})

export class TokenService {
    
    returnToken() {
        return sessionStorage.getItem(KEY) ?? '';
    }

    saveToken(token: string) {
        sessionStorage.setItem(KEY, token);
    }

    deleteToken() {
        sessionStorage.removeItem(KEY);
    }

    hasToken() {
        return !!this.returnToken();
    }
}