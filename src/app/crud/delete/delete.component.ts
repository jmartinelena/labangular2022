import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  errorMessage: string = '';
  showError: boolean = false;
  
  formDelete = this.fb.group({
    id: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9]|[1-9][0-9]+$')]]
  })
  
  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeesService) { }

  invalidId() {
    return this.formDelete.get('id')?.invalid && (this.formDelete.get('id')?.dirty || this.formDelete.get('id')?.touched);
  }

  ngOnInit(): void {
  }

  deleteById(id: string) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: res => {
        //console.log(res);
        this.showError = false;
        this.router.navigate(['/select']).then(() => window.location.reload());
      },
      error: err => {
        //console.log(err);
        this.showError = true;
        if (err.error.Error == null) {
          this.errorMessage = 'Se rompio la conexion a base de datos: \n' + err.message;
        }
        else {
          this.errorMessage = err.error.Error;
        }
      }
    })
  }
}
