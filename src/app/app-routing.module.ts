import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeCreateOrUpdateComponent} from './recipes/recipe-create-or-update/recipe-create-or-update.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: 'new', component: RecipeCreateOrUpdateComponent},
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeCreateOrUpdateComponent}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipes'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
