import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipes: any;

  constructor(private service: FuncionesService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(){
    this.service.get('recipes').subscribe(
      responce => {
        this.recipes= responce['Recipes'];
        console.log(this.recipes);
      },
      error=>{
        console.log("error");
      })
    
      }  

}
