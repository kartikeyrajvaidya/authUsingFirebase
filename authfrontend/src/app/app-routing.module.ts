import { FreelistingComponent } from './freelisting/freelisting.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { AppComponent } from './app.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: MaincomponentComponent},
    {path: 'register', component: FreelistingComponent},
    {path: 'singup', component: SingupComponent},
    {path: 'singin', component: SinginComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
