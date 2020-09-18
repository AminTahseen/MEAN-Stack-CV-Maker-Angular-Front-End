import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserStateService} from './shared/Additional/user-state.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserStateService]
})
export class AppComponent {


  constructor(
    public router: Router,
    public ustateservice:UserStateService
    ) 
  {
    
  }
  ngOnInit(): void {
    $(document).ready(function(){
      $(".dropdown-trigger").dropdown();
      console.log("jquery working...");
    });
  }
  title = 'AngularFrontend';
}
