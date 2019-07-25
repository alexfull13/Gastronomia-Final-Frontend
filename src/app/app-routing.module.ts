import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetarioViewComponent } from './recetario-view/recetario-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'reset-password', pathMatch: 'prefix'},
  {path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
  {path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule'},
  {path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule'},
  {path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule'},
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: 'recetario', component: RecetarioComponent},
  {path: 'recetario/:idReceta', component: RecetarioViewComponent},
 


  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
