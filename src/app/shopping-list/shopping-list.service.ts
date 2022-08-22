import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'pcs'),
    new Ingredient('Tomatoes', 10, 'pcs'),
    new Ingredient('Cake Flour', 1, 'kg')
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitIngredientsChanged();
  }

  deleteIngredient(ingredient: Ingredient) {
      const index = this.ingredients.indexOf(ingredient);
      this.ingredients.splice(index, 1);
      this.emitIngredientsChanged();
  }

  clearIngredients() {
    this.ingredients = [];
    this.emitIngredientsChanged();
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emitIngredientsChanged();
  }

  private emitIngredientsChanged() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(oldIngredient: Ingredient, newIngredient: Ingredient) {
    const index = this.ingredients.indexOf(oldIngredient);
    const foundIngredient = this.ingredients[index];
    foundIngredient.amount = newIngredient.amount;
    foundIngredient.unit = newIngredient.unit;
    foundIngredient.name = newIngredient.name;
    this.emitIngredientsChanged();
  }
}
