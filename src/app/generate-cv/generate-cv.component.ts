import { Component, OnInit } from '@angular/core';
import {WorkExpService} from '../shared/WorkExperience/work-exp.service';
import {WorkExp} from '../shared/WorkExperience/work-exp.model';
import {EducationService} from '../shared/Education/education.service';
import {Education} from '../shared/Education/education.model';
import {ExtraFieldsService} from '../shared/extrafields/extra-fields.service';
import {ExtraFields} from '../shared/extrafields/extra-fields.model';
import {ReferencesService} from '../shared/References/references.service';
import {References} from '../shared/References/references.model';
import {ResearchExpService} from '../shared/ResearchExperience/research-exp.service';
import {ResearchExp} from '../shared/ResearchExperience/research-exp.model';
import {UserService} from '../shared/Users/user.service';
import {User} from '../shared/Users/user.model';

@Component({
  selector: 'app-generate-cv',
  templateUrl: './generate-cv.component.html',
  styleUrls: ['./generate-cv.component.css'],
  providers:[WorkExpService,EducationService,ExtraFieldsService,ReferencesService,
             ResearchExpService,UserService]
})
export class GenerateCVComponent implements OnInit {

  constructor(
    public userService:UserService,
    public refservice:ReferencesService,
    public eduServices:EducationService,
    public EFService:ExtraFieldsService,
    public researchexpservice:ResearchExpService,
    public workexpservice:WorkExpService
    ) { }

  ngOnInit(): void {
    this.getAllActivities();
    this.getAllEducation();
    this.getAllRef();
    this.getAllWorkExp();
    this.getCurrentUserData();
    this.getResearchAllExp()
  }

getAllEducation()
{
  this.eduServices.getEducations(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.eduServices.educations=res as Education[];
  });
}
getAllRef()
{
  this.refservice.getReferences(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.refservice.referencesList=res as References[];
  });
}

getAllActivities()
{
  this.EFService.getExtraFields(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.EFService.extraFieldsList=res as ExtraFields[];
  });
}

getResearchAllExp()
{
  this.researchexpservice.getExperiences(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.researchexpservice.expList=res as ResearchExp[];
  });
}

getAllWorkExp()
{
  this.workexpservice.getExperiences(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.workexpservice.expList=res as WorkExp[];
  });
}
getCurrentUserData(){
  this.userService.getUserDetails(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe(
    (response)=>
    {
      var res = JSON.stringify(response);
      let myObj = JSON.parse(res);
      this.userService.selectedUser={
        _id:myObj._id,
        username:myObj.username,
        user_password:myObj.user_password,
        user_name:myObj.user_name,
        gender:myObj.gender,
        dateOfBirth:myObj.dateOfBirth,
        email:myObj.email,
        contact_number:myObj.contact_number,
      }
    });
}
}
