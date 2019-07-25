import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../router.animations';
import {ServiceService} from '../layout/matriculacion/service.service';
import swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../layout/matriculacion/modelos/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
 

  constructor( private route: ActivatedRoute, private router: Router) {}

  @Input() username: string
  @Input() password:string

  ngOnInit() {
    
  }

  Login(){

    if (this.username == "admin" && this.password == "admin" ) {

      this.router.navigate(['/product']);
      
    }else{

      alert("Credenciales incorrectas");
      location.reload();

    }


  }


}
