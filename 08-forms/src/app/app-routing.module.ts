import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {LifeCycleComponent} from './life-cycle/life-cycle.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
