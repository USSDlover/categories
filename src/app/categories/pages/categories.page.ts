import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})
export class CategoriesPage implements OnInit {
  constructor(public service: CategoriesService) {
  }

  ngOnInit(): void {
  }
}
