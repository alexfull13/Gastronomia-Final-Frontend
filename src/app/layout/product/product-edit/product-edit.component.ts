import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesService } from 'src/app/services/funciones.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  public id: string;
  constructor(private route: ActivatedRoute,private service:FuncionesService, public router: Router) { }

  products: any;
  idProduct =this.route.snapshot.paramMap.get('idProduct');
  @Input() data = { id:this.idProduct ,name: '',state:''}
  @Input() dataXParam = {id:this.idProduct}

  ngOnInit() {
   
  }

  putProduct(){
    this.service.put('products',{Product: this.data}).subscribe(
      result => {
        alert("categoria editada con exito");
        this.router.navigate(['/product'])
      },
      err => {
        
        console.log(err);
      }
    );
    }

     

 

}
