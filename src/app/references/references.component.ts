import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReferencesService} from '../shared/References/references.service';
import {References} from '../shared/References/references.model';

declare var M:any;
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
  providers: [ReferencesService]
})
export class ReferencesComponent implements OnInit {

  constructor(public refservice:ReferencesService) { }

  ngOnInit(): void {
    this.resetForm();
    this.getAllRef();
  }
  resetForm(form?: NgForm){
    this.refservice.selectedreference={
      _id:"",
      name:"",
      designation:"",
      company:"",
      contact_no:"",
      contact_email:"",
      user_id:JSON.parse(sessionStorage.getItem("loggedIn"))._id,
    }
  }
  
  onSubmit(form:NgForm)
  {
    if(form.value._id=="")
    {
      this.refservice.addReferences(form.value).subscribe((res)=>{
        this.resetForm(form);  
        M.toast({html:'Reference Added Successfully !', classes:'rounded'});      
      });
    }
    else
    {//update 
      this.refservice.putReferences(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getAllRef()
        M.toast({html:'Updated Successfully', classes:'rounded'});
      });
    }
}

getAllRef()
{
  this.refservice.getReferences(JSON.parse(sessionStorage.getItem("loggedIn"))._id).subscribe((res)=>{
    this.refservice.referencesList=res as References[];
  });
}

onEdit(ref:References){
  this.refservice.selectedreference=ref;
}

}
