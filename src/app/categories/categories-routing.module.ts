import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesPage} from './pages/categories.page';
import {CategoriesResolve} from './resolvers/categories.resolve';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage,
    resolve: {
      categories: CategoriesResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}

export const RoutedComponents = [CategoriesPage];

export const Resolvers = [CategoriesResolve]
