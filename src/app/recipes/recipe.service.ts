import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import {RecipeNoID} from './recipeNoID.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Schnitzel with Fries',
      'A super tasty Schnitzel with Fries',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      [
        new Ingredient('Meat', 1, 'pcs'),
        new Ingredient('Eggs', 2, 'pcs'),
        new Ingredient('Wheat flour', 50, 'g'),
        new Ingredient('Bread Crumbs', 2, 'g'),
        new Ingredient('Lemon', 1, 'pcs'),
        new Ingredient('French Fries', 20 , 'pcs')
      ]),
    new Recipe(
      2,
      'Hamburger',
      'A juicy bacon cheese burger.',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Bacon', 3, 'pcs'),
        new Ingredient('Cheese', 1, 'pcs'),
        new Ingredient('Meat', 1, 'pcs'),
        new Ingredient('Bun', 1, 'pcs')
      ])
  ];
  constructor() { }

  getRecipe(id: number) {
    return this.recipes.find(r => r.id === id);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
    this.emitRecipesChanged();
  }

  updateRecipe(id: number, recipe: RecipeNoID) {
    const recipeToUpdate = this.recipes.find(r => r.id === id);
    recipeToUpdate.name = recipe.name;
    recipeToUpdate.description = recipe.description;
    recipeToUpdate.imagePath = recipe.imagePath;
    recipeToUpdate.ingredients = recipe.ingredients;
    this.emitRecipesChanged();
  }

  addRecipe(recipe: RecipeNoID) {
    this.recipes.push(new Recipe(this.generateID(), recipe.name, recipe.description, recipe.imagePath, recipe.ingredients));
    this.emitRecipesChanged();
  }

  emitRecipesChanged() {
    this.recipesChanged.next(this.recipes.slice());
  }

  generateID() {
    let idFound = false;
    let id;
    do {
      id = Math.floor(Math.random() * 1000);
      if (!this.recipes.find(r => r.id === id)) {
        idFound = true;
      }
    } while (!idFound);
    return id;
  }
}
