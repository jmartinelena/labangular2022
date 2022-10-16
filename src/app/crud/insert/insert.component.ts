import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeRequest } from '../models/EmployeeRequest';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  errorMessage: string = '';
  showError: boolean = false;

  formInsert = this.fb.group({
    lname: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
    fname: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(10)]]
  });

  invalidLname() {
    return this.formInsert.get('lname')?.invalid && (this.formInsert.get('lname')?.dirty || this.formInsert.get('lname')?.touched)
  }

  invalidFname() {
    return this.formInsert.get('fname')?.invalid && (this.formInsert.get('fname')?.dirty || this.formInsert.get('fname')?.touched)
  }

  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeesService) { }

  ngOnInit(): void {
  }

  sendForm(lname: string, fname: string) {
    let employee = new EmployeeRequest('', lname, fname);
    
    this.employeeService.addEmployee(employee).subscribe({
      next: res => {
        //console.log(res);
        this.showError = false;
        this.router.navigate(['/select']).then(() => window.location.reload());
      },
      error: err => {
        //console.log(err);
        this.showError = true;
        this.errorMessage = err.error.Error;
      }
    });
  }

}
