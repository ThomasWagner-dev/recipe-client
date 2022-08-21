import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeCreateOrUpdateComponent} from './recipe-create-or-update.component';

describe('RecipeEditComponent', () => {
  let component: RecipeCreateOrUpdateComponent;
  let fixture: ComponentFixture<RecipeCreateOrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCreateOrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreateOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
