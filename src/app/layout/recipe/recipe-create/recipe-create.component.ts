import { Component, OnInit, Input } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  @Input() data = {recipe_name: '', techniques_name:'',preparedness:'', pax:0}
  ultimo: Object;

  constructor(private service: FuncionesService,  public router: Router) { }

  ngOnInit() {
    this.getLast();
  }

  postRecipe(){
    this.service.post('recipes',{Recipe: this.data}).subscribe(
      result => {
        alert("Receta creada");
        
      },
      err => {
        
        console.log(err);
      }
    );
    }

    getLast(){
      this.service.get('last').subscribe(
        responce => {
          this.ultimo = responce;
         
          console.log(this.ultimo);
        },
        error=>{
          console.log("error");
        })
      
        }


}
