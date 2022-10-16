import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formUpdate = this.fb.group({
    id: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9]|[1-9][0-9]+$')]],
    lname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
    fname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]]
  })

  constructor(private fb: FormBuilder) { }

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

  sendForm() {
    //lenar
  }

}
