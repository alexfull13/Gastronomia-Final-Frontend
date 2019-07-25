import { Component, OnInit, Input } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  products: any;
  ultimo: any;
  detalle: Object;
 

  constructor(private service: FuncionesService, public router: Router,private route: ActivatedRoute) { }
  idRecetaa =this.route.snapshot.paramMap.get('idIngrediente');

  @Input() data={ recipe_id:this.idRecetaa, product_id:0 , quantity:0,unity:''}

  


  ngOnInit() {
    
    this.getProducts();
    this.getDetalle();
       
  }

 
  getProducts(){
    this.service.get('products').subscribe(
      responce => {
        this.products = responce['Products'];
        console.log(this.products);
       
        
      },
      error=>{
        console.log("error");
      })
    
      }

      
      

  postIngredient() {

       this.service.post('ingredients', { Ingredient:this.data}).subscribe(
      result => {
        alert("ingrediente agregado");
        location.reload();
        
      },
      err => {

        console.log(err);
      }
    );
  }


  getDetalle(){
    
    this.service.get('innerfinal/'+ this.idRecetaa).subscribe(
      responce => {
        this.detalle = responce;
        console.log(this.detalle);
      },
      error=>{
        console.log("error");
      })
    
  }

}
