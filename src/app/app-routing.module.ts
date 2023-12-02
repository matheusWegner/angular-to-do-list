import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { ListaTarefaComponent } from './components/tarefas/lista-tarefa/lista-tarefa.component';
import { CadastroTarefaComponent } from './components/tarefas/cadastro-tarefa/cadastro-tarefa.component';

const routes: Routes = [
  { path: 'register',  title: 'Register', component: CadastroComponent },
  { path: 'login',  title: 'Login', component: LoginComponent },
  { path: 'tarefas',  title: 'Lista Tarefas', component: ListaTarefaComponent},
  { path: 'cadastro-tarefa',  title: 'Cadastro Tarefa', component: CadastroTarefaComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
