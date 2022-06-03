import {ICategory, ICategoryApi} from '../interfaces';

export class Category implements ICategory {
  constructor(
    public content: string,
    public id: number,
    public isActive: boolean,
    public pageTitle: string,
    public pageType: string,
  ) {
  }

  static create(data: ICategory): Category {
    return new Category(
      data.content,
      data.id,
      data.isActive,
      data.pageTitle,
      data.pageType
    );
  }

  static dummy(): Category {
    return Category.create({
      id: Math.random() * 10000,
      content: (Math.random() * 10000).toString() + 'Dummy Content',
      pageTitle: (Math.random() * 10000).toString() + 'Dummy title',
      pageType: Math.random() * 10 > 1 ? 'category' : 'article',
      isActive: Math.random() * 10 > 1,
    });
  }

  static fromJson(data: ICategoryApi): Category {
    return Category.create({
      id: data.id,
      content: data.content,
      pageTitle: data.pageTitle,
      pageType: data.pageType,
      isActive: data.isActive
    })
  }

}
