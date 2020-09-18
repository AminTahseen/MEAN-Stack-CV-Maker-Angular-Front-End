import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ExtraFieldsService} from '../shared/extrafields/extra-fields.service';
import {ExtraFields} from '../shared/extrafields/extra-fields.model';

declare var M:any;
@Component({
  selector: 'app-activities-languages',
  templateUrl: './activities-languages.component.html',
  styleUrls: ['./activities-languages.component.css'],
  providers: [ExtraFieldsService]
})
export class ActivitiesLanguagesComponent implements OnInit {

  constructor(public EFService:ExtraFieldsService) { }

  ngOnInit(): void {
    this.resetForm();
    this.getAll();
  }
  resetForm(form?: NgForm){
    this.EFService.selectedrextraFields={
      _id:"",
      curricular_activities:"",
      languages:"",
      user_id:JSON.parse(sessionStorage.getItem("loggedIn"))._id,
    }
  }

  onSubmit(form:NgForm)
  {
    if(form.value._id=="")
    {
      this.EFService.addExtraFields(form.value).subscribe((res)=>{
        this.resetForm(form);  
        M.toast({html:'Added Successfully !', classes:'rounded'});      
      });
    }
    else
    {//update 
      this.EFService.putExtraFields(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getAll()
        M.toast({html:'Updated Successfully', classes:'rounded'});
      });
    }
}

getAll()
{
  this.EFService.getExtraFields(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.EFService.extraFieldsList=res as ExtraFields[];
  });
}

onEdit(obj:ExtraFields){
  this.EFService.selectedrextraFields=obj;
}

}
