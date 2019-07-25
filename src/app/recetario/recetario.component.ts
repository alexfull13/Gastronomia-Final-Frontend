import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../services/funciones.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
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
