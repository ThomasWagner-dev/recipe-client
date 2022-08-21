import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingAddItemComponent} from './shopping-list/shopping-add-item/shopping-add-item.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {RecipeCreateOrUpdateComponent} from './recipes/recipe-create-or-update/recipe-create-or-update.component';
import {AppRoutingModule} from './app-routing.module';
import {ShoppingListItemComponent} from './shopping-list/shopping-list-item/shopping-list-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShoppingListItemEditComponent} from './shopping-list/shopping-list-item/shopping-list-item-edit/shopping-list-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingAddItemComponent,
    DropdownDirective,
    RecipeCreateOrUpdateComponent,
    ShoppingListItemComponent,
    ShoppingListItemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
