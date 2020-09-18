import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WorkExpService} from '../shared/WorkExperience/work-exp.service';
import {WorkExp} from '../shared/WorkExperience/work-exp.model';

declare var M:any;

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  providers: [WorkExpService]
})
export class WorkExperienceComponent implements OnInit {

  constructor(public workexpservice:WorkExpService) { }

  ngOnInit(): void {
    this.getAllExp();
    this.resetForm();
  }
  resetForm(form?: NgForm){
    this.workexpservice.selectedWorkexp={
      _id:"",
      company_name:"",
      designation:"",
      start_date:"",
      end_date:"",
      responsibilities:"",
      user_id:JSON.parse(sessionStorage.getItem("loggedIn"))._id,
    }
  }
  
  onSubmit(form:NgForm)
  {
    if(form.value._id=="")
    {
      this.workexpservice.addWorkExperience(form.value).subscribe((res)=>{
        this.resetForm(form);  
        M.toast({html:'Experience Added Successfully !', classes:'rounded'});      
      });
    }
    else
    {//update 
      this.workexpservice.putExperiences(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getAllExp()
        M.toast({html:'Updated Successfully', classes:'rounded'});
      });
    }
}

getAllExp()
{
  this.workexpservice.getExperiences(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.workexpservice.expList=res as WorkExp[];
  });
}

onEdit(exp:WorkExp){
  this.workexpservice.selectedWorkexp=exp;
}

}
