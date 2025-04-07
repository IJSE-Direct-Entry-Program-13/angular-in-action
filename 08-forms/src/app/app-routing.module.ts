import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {LifeCycleComponent} from './life-cycle/life-cycle.component';

const routes: Routes = [
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
