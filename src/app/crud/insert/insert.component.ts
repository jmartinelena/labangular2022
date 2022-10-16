import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendForm() {
    // Llenar
  }

}
