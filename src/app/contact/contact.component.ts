import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContactServiceService} from '../shared/ContactUs/contact-service.service'
import {ContactModel} from '../shared/ContactUs/contact-model.model'

declare var M:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactServiceService]
})
export class ContactComponent implements OnInit {

  constructor(public contactService:ContactServiceService) {
    
   }

  ngOnInit(): void {
    this.resetForm();  
  }

  onSubmit(form:NgForm){
 
      this.contactService.postContact(form.value).subscribe((res)=>{
        this.resetForm(form);  
        M.toast({html:'Contacted Successfully', classes:'rounded'});      
      });
    
  }
  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.contactService.selectedContact={
      _id:"",
      email:"",
      message:""
    }
  }
}
