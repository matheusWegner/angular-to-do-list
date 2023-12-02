import { HttpClient } from "@angular/common/http";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/enviroments/environment";
import { User } from "../model/User";
import { UserService } from "./user.service";
import { Tarefa } from "../model/tarefa";

@Injectable({
    providedIn: 'root'
})

export class TarefaService {
  @Output() isAuth = new EventEmitter<boolean>();

    constructor(
        private http: HttpClient,
        private router:Router, 
        private userService: UserService, 
       
      ) { }

      url = environment.URL_LOCAL;

      register(tarefa:Tarefa) {
        return this.http.post(this.url + 'task/register',tarefa);
      }

      remove(id:String) {
        return this.http.get(this.url + 'task/remove/'+id);
      }

      listByUser(id:String) {
        return this.http.get(this.url + 'task/listByUser/'+id);
      }

      listByUserAndData(data:string) {
        return this.http.get(this.url + 'task/listByUserAndData/'+data);
      }

      listById(id:String) {
        return this.http.get(this.url + 'task/listById/'+id);
      }
      
}
