import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  products: any;

  constructor(private service: FuncionesService) { }

  ngOnInit() {
    this.getProducts();
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

}
