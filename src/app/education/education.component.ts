import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationService } from '../shared/Education/education.service';
import { Education } from '../shared/Education/education.model';

declare var M: any;
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [EducationService],
})
export class EducationComponent implements OnInit {
  constructor(public eduServices: EducationService) {}

  ngOnInit(): void {
    this.resetForm();
    this.getAllEducation();
  }
  resetForm(form?: NgForm) {
    this.eduServices.selectedEducation = {
      _id: '',
      institute_name: '',
      program: '',
      start_date: '',
      end_date: '',
      field: '',
      user_id: JSON.parse(sessionStorage.getItem('loggedIn'))._id,
    };
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.eduServices.postEducation(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Education Added Successfully !', classes: 'rounded' });
      });
    } else {
      //update
      this.eduServices.putEducations(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getAllEducation();
        M.toast({ html: 'Updated Successfully', classes: 'rounded' });
      });
    }
  }

  getAllEducation() {
    this.eduServices
      .getEducations(JSON.parse(sessionStorage.getItem('loggedIn'))._id)
      .subscribe((res) => {
        this.eduServices.educations = res as Education[];
      });
  }

  onEdit(edu: Education) {
    this.eduServices.selectedEducation = edu;
  }
}
