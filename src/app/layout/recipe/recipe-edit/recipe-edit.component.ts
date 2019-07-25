import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesService } from 'src/app/services/funciones.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private service:FuncionesService, public router: Router) { }
  
  idRecipe =this.route.snapshot.paramMap.get('idRecipe');
  @Input() data = { id:this.idRecipe,recipe_name: '',technique_name:'',preparedness:'', pax:0}

  ngOnInit() {
  }

  putRecipe(){
    this.service.put('recipes',{Recipe: this.data}).subscribe(
      result => {
        alert("receta editada con exito");
        this.router.navigate(['/recipe'])
      },
      err => {
        
        console.log(err);
      }
    );
    }

}
