import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialModule} from './angular-material.module';
import {Resolvers, RoutedComponents} from './categories-routing.module';
import {CategoryComponent} from './components/category/category.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ...RoutedComponents,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    ...Resolvers
  ]
})
export class CategoriesModule {}
