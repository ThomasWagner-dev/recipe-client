import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  onAddIngredientsToShoppingList() {
    this.shoppingListService.addIngredientsFromRecipe(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
