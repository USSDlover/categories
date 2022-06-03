import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, of} from 'rxjs';
import {ICategory, ICategoryApi} from '../interfaces';
import {environment} from 'environment';
import {Category} from '../models/category';

@Injectable()
export class CategoriesService {
  baseUrl = environment.api.baseUrl;
  private _categories: ICategory[] = [];
  private categories$ = new BehaviorSubject<ICategory[]>(this._categories)

  constructor(private http: HttpClient) {
  }

  fetchCategories(): Observable<void> {
    return this.http.get<ICategoryApi[]>(`${this.baseUrl}/data.json`)
      .pipe(
        map((response) => {
          const mappedCategories = response.map(category => (Category.fromJson(category)));
          this.categories$.next(mappedCategories);
        }),
        catchError(err => {
          console.error('Got error on getting categories data', err.stack);
          console.table(err, Object.getOwnPropertyNames(err))
          return [];
        })
      );
  }

  get categories(): Observable<ICategory[]> {
    return this.categories$.asObservable();
  }

  find(id: number): Observable<Category | null> {
    const category = this._categories.find(category => category.id === id);

    if (category)
      return of(category);
    else
      return of(null);
  }

  filterBy(isActive: boolean): Observable<ICategory[]> {
    const filteredCategories = this._categories.filter(category => (category.isActive === isActive));
    return of(filteredCategories);
  }
}
