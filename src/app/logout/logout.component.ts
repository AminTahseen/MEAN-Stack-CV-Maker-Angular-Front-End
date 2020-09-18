import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(    
    private router: Router
    ) { }

  ngOnInit(): void {
    sessionStorage.clear();
    M.toast({html:'Successfully Logged Out ', classes:'rounded'});  
    this.router.navigate(['/login']);    

  }

}
