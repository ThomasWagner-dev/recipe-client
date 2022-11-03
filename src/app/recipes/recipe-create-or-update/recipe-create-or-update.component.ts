import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NgForm} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {EnvironmentService} from '../../environment.service';
import {RecipeNoID} from '../recipeNoID.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-create-or-update',
  templateUrl: './recipe-create-or-update.component.html',
  styleUrls: ['./recipe-create-or-update.component.css']
})
export class RecipeCreateOrUpdateComponent implements OnInit {
  recipeID: number;
  updateMode = false;
  defaultFormValues: any = {
    unit: this.environment.defaultUnit
  };
  newOrUpdatedRecipe = new RecipeNoID('', '', '', []);

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, public environment: EnvironmentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.updateMode = params.id !== null;
        if (this.updateMode) {
          const selectedRecipe = this.recipeService.getRecipe(Number(params['id']));
          this.recipeID = selectedRecipe.id;
          this.newOrUpdatedRecipe = new RecipeNoID(
            selectedRecipe.name,
            selectedRecipe.description,
            selectedRecipe.imagePath,
            selectedRecipe.ingredients);
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    this.newOrUpdatedRecipe.name = form.value.recipeName;
    this.newOrUpdatedRecipe.description = form.value.recipeDescription;
    this.newOrUpdatedRecipe.imagePath = form.value.recipeImagePath;
    if (this.updateMode) {
      this.recipeService.updateRecipe(this.recipeID, this.newOrUpdatedRecipe);
    } else {
      this.recipeService.addRecipe(this.newOrUpdatedRecipe);
    }
  }

  onAddIngredient(ingredientForm: NgForm) {
    this.newOrUpdatedRecipe.ingredients.push(
      new Ingredient(ingredientForm.value.name, ingredientForm.value.amount, ingredientForm.value.unit));
    ingredientForm.reset(this.defaultFormValues);
  }

  onClearIngredientForm(ingredientForm: NgForm) {
    ingredientForm.reset(this.defaultFormValues);
  }
}
