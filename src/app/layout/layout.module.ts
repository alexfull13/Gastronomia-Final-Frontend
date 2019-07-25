import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RecipeViewComponent } from './recipe/recipe-view/recipe-view.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { IngredientsComponent } from './ingredients/ingredients.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ProductViewComponent, ProductCreateComponent, ProductEditComponent, RecipeViewComponent, RecipeCreateComponent, RecipeEditComponent, IngredientsComponent]
})
export class LayoutModule {
}
