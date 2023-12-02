import { Injectable } from '@angular/core';
import {  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders}
from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService){}
    
    intercept( request: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>> {

        if(this.tokenService.hasToken()){
            const token = this.tokenService.returnToken();
            const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
            request = request.clone({headers});
        } 
        return next.handle(request);
    }
}