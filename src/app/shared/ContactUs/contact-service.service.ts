import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import {ContactModel} from '../ContactUs/contact-model.model'

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  selectedContact:ContactModel; 
  readonly baseURL='http://localhost:3000/contactUs';
  constructor(private http:HttpClient) { }

  postContact(contact:ContactModel){
    return this.http.post(this.baseURL, contact);
  }
}
