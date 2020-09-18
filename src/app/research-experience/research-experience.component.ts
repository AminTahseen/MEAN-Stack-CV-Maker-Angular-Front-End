import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ResearchExpService} from '../shared/ResearchExperience/research-exp.service';
import {ResearchExp} from '../shared/ResearchExperience/research-exp.model';


declare var M:any;
@Component({
  selector: 'app-research-experience',
  templateUrl: './research-experience.component.html',
  styleUrls: ['./research-experience.component.css'],
  providers: [ResearchExpService]

})
export class ResearchExperienceComponent implements OnInit {

  constructor(public researchexpservice:ResearchExpService) { }


  ngOnInit(): void {
    this.getAllExp();
    this.resetForm();
  }
  resetForm(form?: NgForm){
    this.researchexpservice.selectedResearchexp={
      _id:"",
      project_name:"",
      start_date:"",
      end_date:"",
      research_field:"",
      user_id:JSON.parse(sessionStorage.getItem("loggedIn"))._id,
    }
  }
  
  onSubmit(form:NgForm)
  {
    if(form.value._id=="")
    {
      this.researchexpservice.addExperience(form.value).subscribe((res)=>{
        this.resetForm(form);  
        M.toast({html:'Experience Added Successfully !', classes:'rounded'});      
      });
    }
    else
    {//update 
      this.researchexpservice.putExperiences(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getAllExp()
        M.toast({html:'Updated Successfully', classes:'rounded'});
      });
    }
}

getAllExp()
{
  this.researchexpservice.getExperiences(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.researchexpservice.expList=res as ResearchExp[];
  });
}

onEdit(exp:ResearchExp){
  this.researchexpservice.selectedResearchexp=exp;
}

}
