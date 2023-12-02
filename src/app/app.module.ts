import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaTarefaComponent } from './components/tarefas/lista-tarefa/lista-tarefa.component';
import { CadastroTarefaComponent } from './components/tarefas/cadastro-tarefa/cadastro-tarefa.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { InterceptorModule } from './config/interceptors/interceptor.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog } from './components/dialog/dialog.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    ListaTarefaComponent,
    CadastroTarefaComponent,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MaterialModule,
    InterceptorModule,
    MatDialogModule,
    NgxSpinnerModule
  ],
  providers: [{provide: MAT_DATE_FORMATS, useValue: {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY', 
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
  }}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
