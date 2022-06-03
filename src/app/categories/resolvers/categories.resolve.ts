import {Resolve} from '@angular/router';
import {CategoriesService} from '../services/categories.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CategoriesResolve implements Resolve<void> {
  constructor(private service: CategoriesService) {
  }

  resolve(): Observable<void> {
    return this.service.fetchCategories();
  }
}
