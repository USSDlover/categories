import {Resolve} from '@angular/router';
import {CategoriesService} from '../services/categories.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ICategory} from '../interfaces';

@Injectable()
export class CategoriesResolve implements Resolve<ICategory[]> {
  constructor(private service: CategoriesService) {
  }

  resolve(): Observable<ICategory[]> {
    return this.service.fetchCategories();
  }
}
