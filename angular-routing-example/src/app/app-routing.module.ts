import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service-details', component: ServiceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
