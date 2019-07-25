import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RecipeViewComponent } from './recipe/recipe-view/recipe-view.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: '', pathMatch: 'prefix'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
      {path: 'forms', loadChildren: './form/form.module#FormModule'},
      {path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule'},
      {path: 'grid', loadChildren: './grid/grid.module#GridModule'},
      {path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule'},
      {path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'},

      {path: 'product',component:ProductViewComponent},
      {path: 'product-create',component:ProductCreateComponent},
      {path: 'product-edit/:idProduct',component:ProductEditComponent},

      {path: 'recipe',component:RecipeViewComponent},
      {path: 'recipe-create',component:RecipeCreateComponent},
      {path: 'recipe-edit/:idRecipe',component:RecipeEditComponent},

      {path: 'ingredient/:idIngrediente',component:IngredientsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
