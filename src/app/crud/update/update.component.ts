import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeRequest } from '../models/EmployeeRequest';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  errorMessage: string = '';
  showError: boolean = false;
  
  formUpdate = this.fb.group({
    id: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9]|[1-9][0-9]+$')]],
    lname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
    fname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]]
  })

  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeesService) { }

  ngOnInit(): void {
  }

  invalidLname() {
    return this.formUpdate.get('lname')?.invalid && (this.formUpdate.get('lname')?.dirty || this.formUpdate.get('lname')?.touched)
  }

  invalidFname() {
    return this.formUpdate.get('fname')?.invalid && (this.formUpdate.get('fname')?.dirty || this.formUpdate.get('fname')?.touched)
  }

  invalidId() {
    return this.formUpdate.get('id')?.invalid && (this.formUpdate.get('id')?.dirty || this.formUpdate.get('id')?.touched);
  }

  buttonIsDisabled() {
    return this.formUpdate.get('id')?.invalid || this.formUpdate.get('lname')?.invalid || this.formUpdate.get('fname')?.invalid;
  }

  sendForm(id: string, lname: string, fname: string) {
    let employee = new EmployeeRequest(id, lname, fname);

    this.employeeService.updateEmployee(id, employee).subscribe({
      next: res => {
        //console.log(res);
        this.showError = false;
        this.router.navigate(['/select']).then( () => window.location.reload() );
      },
      error: err => {
        //console.log(err)
        this.showError = true;
        this.errorMessage = err.error.Error;
      }
    })
  }

}
