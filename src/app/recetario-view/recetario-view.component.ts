import { Component, OnInit, Input } from '@angular/core';
import { FuncionesService } from '../services/funciones.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recetario-view',
  templateUrl: './recetario-view.component.html',
  styleUrls: ['./recetario-view.component.scss']
})
export class RecetarioViewComponent implements OnInit {

  @Input() pax:any
  
  receta: any;
  detalle: any;

 

  constructor(private route: ActivatedRoute,private service:FuncionesService, public router: Router) { }

  ngOnInit() {
   this.getReceta();
   this.getDetalle();
   
  }
  
  idReceta =this.route.snapshot.paramMap.get('idReceta');
  getReceta(){
    
    this.service.get('recipe/'+ this.idReceta).subscribe(
      responce => {
        this.receta = responce['Recipe'];
        console.log(this.receta);
      },
      error=>{
        console.log("error");
      })
    
  }

  getDetalle(){
    
    this.service.get('innerfinal/'+ this.idReceta).subscribe(
      responce => {
        this.detalle = responce;
        console.log(this.detalle);
      },
      error=>{
        console.log("error");
       })
     
  }

  Total(){
    
    this.pax
  
  }

  

  
  
  
}
