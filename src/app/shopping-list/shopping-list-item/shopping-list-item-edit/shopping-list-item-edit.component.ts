import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {ShoppingListService} from '../../shopping-list.service';
import {EnvironmentService} from '../../../environment.service';
import {ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-shopping-list-item-edit',
  templateUrl: './shopping-list-item-edit.component.html',
  styleUrls: ['./shopping-list-item-edit.component.css']
})
export class ShoppingListItemEditComponent implements OnInit {
  @Input() ingredient: Ingredient;
  @Output() ingredientUpdated = new EventEmitter<void>();
  externalMode = false;
  constructor(private shoppingListService: ShoppingListService, public environment: EnvironmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.route.snapshot.url.includes(new UrlSegment('shopping-list', {}))) {
      this.externalMode = true;
    }
  }

  onUpdate(form: NgForm) {
    if (this.externalMode) {
      this.ingredient.name = form.value.name;
      this.ingredient.amount = form.value.amount;
      this.ingredient.unit = form.value.unit;
    } else {
      this.shoppingListService.updateIngredient(this.ingredient, new Ingredient(form.value.name, form.value.amount, form.value.unit));
    }
    this.ingredientUpdated.emit();
  }
}
