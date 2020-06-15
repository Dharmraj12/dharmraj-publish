import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDemoComponent } from './components/login/login-demo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginDemoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
