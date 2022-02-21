import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sub-module1',
    loadChildren: () => import('@test/sub-module1').then((m) => m.SubModule1Module)
  },
  {
    path: 'sub-module2',
    loadChildren: () => import('@test/sub-module2').then((m) => m.SubModule2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
