import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from '../../interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: ICategory | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
