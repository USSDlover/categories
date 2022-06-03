import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CategoriesRoutingModule, Resolvers, RoutedComponents} from './categories-routing.module';
import {CategoryComponent} from './components/category/category.component';
import {CommonModule} from '@angular/common';
import {CategoriesService} from './services/categories.service';
import {AngularMaterialModule} from './angular-material.module';

@NgModule({
  declarations: [
    ...RoutedComponents,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    CategoriesRoutingModule
  ],
  providers: [
    ...Resolvers,
    CategoriesService
  ]
})
export class CategoriesModule {}
