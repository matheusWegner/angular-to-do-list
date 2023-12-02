import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/model/tarefa';
import { TarefaService } from 'src/app/service/tarefa.service';
import { ConfirmDialog } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cadastro-tarefa',
  templateUrl: './cadastro-tarefa.component.html',
  styleUrls: ['./cadastro-tarefa.component.scss']
})
export class CadastroTarefaComponent {
  tarefa: Tarefa = new Tarefa();
  idTarefa:String = "";
  saveButton:String = "REGISTER";
  constructor(private tarefaService:TarefaService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private spinner: NgxSpinnerService){
      this.idTarefa = this.route.snapshot.queryParams['idTarefa'];
      if(this.idTarefa){
          this.spinner.show();
          this.tarefaService.listById(this.idTarefa).subscribe({
            next: (response) => {
              if(response){
                this.tarefa = <Tarefa> response;
                this.saveButton = "EDIT";
              }
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
  register(){
    this.spinner.show();
    this.tarefaService.register(this.tarefa).subscribe({
      next: (response) => {
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
