import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  @Input() ingredient: Ingredient;
  editMode = false;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.ingredient);
  }

  onEdit() {
    this.editMode = true;
  }
}
