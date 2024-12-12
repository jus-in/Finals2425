import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { ClassRecordComponent } from './class-record/class-record.component';
import { EditStudentRecordComponent } from './edit-student-record/edit-student-record.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // Default route to HomeComponent
  { path: '', component: HomeComponent },

  // Primary routes
  { path: 'registration', component: RegistrationComponent },
  { path: 'view-user-profile', component: ViewUserProfileComponent },
  { path: 'class-record', component: ClassRecordComponent },
  { path: 'edit-student-record', component: EditStudentRecordComponent },
  { path: 'edit-student-record/:studentId', component: EditStudentRecordComponent },

  // Auxiliary routes for header, navigation, and footer
  { path: '', component: HeaderComponent, outlet: 'header' },
  { path: '', component: NavigationComponent, outlet: 'navigation' },
  { path: '', component: FooterComponent, outlet: 'footer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
