import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {EnvironmentService} from '../../environment.service';

@Component({
  selector: 'app-shopping-list-add-item',
  templateUrl: './shopping-add-item.component.html',
  styleUrls: ['./shopping-add-item.component.css']
})
export class ShoppingAddItemComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService, public environment: EnvironmentService) { }

  ngOnInit() {
  }

  onAddIngredient(form: NgForm) {
    console.log(form.value);
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.unit);
    this.shoppingListService.addIngredient(newIngredient);
    form.reset();
  }

  onClearShoppingList() {
    this.shoppingListService.clearIngredients();
  }

}
