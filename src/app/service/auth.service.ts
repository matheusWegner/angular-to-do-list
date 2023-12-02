import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
  @Output() isAuth = new EventEmitter<boolean>();

    constructor(
        private http: HttpClient,
        private router:Router, 
        private userService: UserService, 
       
      ) { }

      url = environment.URL_LOCAL;

      register(user:User) {
        return this.http.post(this.url + 'auth/register',user).subscribe({
            next: (response) => {
            },
            error: (error) => {
              
            },
            complete: () =>{
            }
        });
      }
  
      login(user: User){
          return this.http.post<any>(`${this.url+ 'auth/login'}`, user);
      }
  
      loginSivez(token:string){
          
      }
  
      authentication(token:string) {
          
          this.http.get<any>(`${this.url+ 'auth/authToken/'+token}`).subscribe({
              next: (response) => {
                  const isAuthenticated = response;
                  if(isAuthenticated){
                     this.userService.salvaToken(token);
                  }else{
                    /*let dialogRef = this.dialog.open(ConfirmDialog,
                      { data: { 
                          title: "Atenção", 
                          message: "Usuario Inválido!",
                          confirm: false,
                          textBtnFechar:"Ok",
                          typeDialog: "error"
                          } 
                     });*/
                  }
                  
              },
              error: (error) => {
                  if(error.status == 400){
                     /* let dialogRef = this.dialog.open(ConfirmDialog,
                          { data: { 
                              title: "Atenção", 
                              message: "Usuário ou senha incorretos!",
                              confirm: false,
                              textBtnFechar:"Ok",
                              typeDialog: "error"
                          } 
                      });
                      dialogRef.disableClose = true;   */     
                      
                  }else if(error.status == 500 || error.status == 504){
                      /*let dialogRef = this.dialog.open(ConfirmDialog,
                          { data: { 
                              title: "Atenção", 
                              message: "Erro ao conectar com o servidor!",
                              confirm: false,
                              textBtnFechar:"Ok",
                              typeDialog: "error"
                              } 
                      });
                      dialogRef.disableClose = true;  */
      
                  }else if(error.status == 401){
                      /*let dialogRef = this.dialog.open(ConfirmDialog,
                          { data: { 
                              title: "Atenção", 
                              message: "Você não tem permissão para acessar este projeto!",
                              confirm: false,
                              textBtnFechar:"Ok",
                              typeDialog: "error"
                          } 
                      });
                      dialogRef.disableClose = true;  */
                  }
              },
              complete: () =>{
                  this.isAuth.emit(true);
                 // this.router.navigate(['planoMidia/main'])
              }
          });
      }
  
      logout() {
          this.userService.logout();
      }
  
      isAuthenticated() {
          return this.userService.estaLogado();
      }
  
      getUser(){
          return this.userService.retornaUsuario();
      }
}
