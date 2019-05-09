import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is recipe new cake here', 'http://pngimg.com/download/13136' )
    ];

  constructor() { }

  ngOnInit() {
  }

}


