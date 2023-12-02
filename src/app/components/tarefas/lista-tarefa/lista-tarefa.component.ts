import { Component, EventEmitter, Output } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Moment } from 'moment';
import { User } from 'src/app/model/User';
import { Tarefa } from 'src/app/model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';
import { UserService } from 'src/app/service/user.service';
import { ErrorDialog } from '../../dialog/error-dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialog } from '../../dialog/dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
})

export class ListaTarefaComponent {
  user = <User>{};
  tarefas = <Tarefa[]>[];
  data!:Moment;
  @Output()
  dateChange: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();

  onDateChange(): void {
      this.dateChange.emit();
      this.getTarefasUserByData();
  }  

  constructor(private tarefaService:TarefaService,
              private userService:UserService,
              private router:Router, 
              public dialog: MatDialog,
              private spinner: NgxSpinnerService){
                  this.userService.retornaUsuario().subscribe((user) => this.user = user);
                  this.data = moment();
                  this.getTarefasUserByData();
            }
  editarTarefa(id:string){
      const encodedId = encodeURIComponent(id);
      this.router.navigate([encodeURIComponent("/cadastro-tarefa?idTarefa="+ encodedId)]);
  }    

  remove(id:string){
    this.spinner.show();
    this.tarefaService.remove(id).subscribe({
        next: (response) => {
           this.getTarefasUserByData();
        },
        error: (response) => {
          let dialogRef = this.dialog.open(ConfirmDialog,
            { data: { 
                title: 'Erro', 
                message: "Ocorreu um erro código:" + response.status + " Erro: " + response.error.message,
                fechar: true
            }
          });
        },
        complete: () =>{
          this.spinner.hide();
        }
    });
  }

  getTarefasUser(id:String){
    this.tarefaService.listByUser(id).subscribe({
        next: (response) => {
          this.tarefas = <Tarefa[]> response;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () =>{
        }
    });
  }

  getTarefasUserByData(){
    this.spinner.show();
    this.tarefaService.listByUserAndData(this.data.format("YYYY-MM-DD")).subscribe({
        next: (response) => {
          this.tarefas = <Tarefa[]> response;
        },
        error: (response) => {
            let dialogRef = this.dialog.open(ConfirmDialog,
              { data: { 
                  title: 'Erro', 
                  message: "Ocorreu um erro código:" + response.status + " Erro: " + response.error.message,
                  fechar: true
              }
           });
        },
        complete: () =>{
          this.spinner.hide();
        }
    });
  }
}
