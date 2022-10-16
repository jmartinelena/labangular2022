import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeResponse } from '../models/EmployeeResponse';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  formSelectById = this.fb.group({
    id: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9]|[1-9][0-9]+$')]]
  })
  employeeList: Array<EmployeeResponse> = [];
  employeeById: EmployeeResponse = new EmployeeResponse('','','');
  showEmployee: boolean = false;
  errorMessage: string = '';
  showError: boolean = false;

  invalidId() {
    return this.formSelectById.get('id')?.invalid && (this.formSelectById.get('id')?.dirty || this.formSelectById.get('id')?.touched);
  }

  constructor(private fb: FormBuilder, private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getById(id: string) {
    this.employeeService.getEmployee(id).subscribe({
      next: res => {
      this.showEmployee = true;
      this.showError = false;
      this.employeeById = res;
      //console.log(this.employeeById)
    }, 
    error: err => {
      //console.log(err);
      this.showEmployee = false;
      this.showError = true;
      this.errorMessage = err.error.Error;
    }})
  }

  getAll() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employeeList = res;
      //console.log(this.employeeList);
    })
  }

}
