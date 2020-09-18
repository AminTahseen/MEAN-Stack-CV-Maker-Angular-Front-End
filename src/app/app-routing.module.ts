import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../app/about/about.component';
import {ContactComponent} from '../app/contact/contact.component';
import {FeaturesComponent} from '../app/features/features.component';
import {HelpComponent} from '../app/help/help.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ResearchExperienceComponent } from './research-experience/research-experience.component';
import { ReferencesComponent } from './references/references.component';
import { ActivitiesLanguagesComponent } from './activities-languages/activities-languages.component';
import { GenerateCVComponent } from './generate-cv/generate-cv.component';

const routes: Routes = [
  {path:'',component: FeaturesComponent}, // http://localhost:4200/
  {path:'features',component: FeaturesComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'help',component:HelpComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'userProfile',component:UserProfileComponent},
  {path:'logout',component:LogoutComponent},
  {path:'education',component:EducationComponent},
  {path:'workExperience',component:WorkExperienceComponent},
  {path:'researchExperience',component:ResearchExperienceComponent},
  {path:'references',component:ReferencesComponent},
  {path:'activitiesLanguage',component:ActivitiesLanguagesComponent},
  {path:'generateCV',component:GenerateCVComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
  FeaturesComponent,AboutComponent,ContactComponent,HelpComponent,
  SignupComponent,LoginComponent,UserProfileComponent,LogoutComponent,
  EducationComponent, WorkExperienceComponent,ResearchExperienceComponent,
  ReferencesComponent,ActivitiesLanguagesComponent,GenerateCVComponent
]