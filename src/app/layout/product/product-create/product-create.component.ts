import { Component, OnInit, Input } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
   @Input() data = {product_name: '', category_name:'',cost:0}

  constructor(private service:FuncionesService, public router: Router) { }

  ngOnInit() {
  }

  postProduct(){
    this.service.post('products',{Product: this.data}).subscribe(
      result => {
        alert("Producto creada");
        this.router.navigate(['/product'])
      },
      err => {
        
        console.log(err);
      }
    );
    }

}
