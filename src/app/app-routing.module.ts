import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';

import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component'

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

export const ApplicationComponents = [
  EmployeeListComponent, EmployeeDetailComponent, EmployeeCreateComponent, EmployeeEditComponent,
  TodoListComponent, TodoDetailComponent, TodoCreateComponent, TodoEditComponent,
  HomeComponent, AboutComponent, E404Component
];

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'employees/list', component: EmployeeListComponent },
  { path: 'employees/create', component: EmployeeCreateComponent },
  { path: 'employees/detail/:id', component: EmployeeDetailComponent },
  { path: 'employees/edit/:id', component: EmployeeEditComponent },

  { path: 'todos/list', component: TodoListComponent },
  { path: 'todos/create', component: TodoCreateComponent },
  { path: 'todos/detail/:id', component: TodoDetailComponent },
  { path: 'todos/edit/:id', component: TodoEditComponent },

  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
