import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: '',
    children: [
      {
        path: ':id',
        component: '',
        resolve: {
          category: '',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
