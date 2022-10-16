import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  formDelete = this.fb.group({
    id: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9]|[1-9][0-9]+$')]]
  })
  
  constructor(private fb: FormBuilder) { }

  invalidId() {
    return this.formDelete.get('id')?.invalid && (this.formDelete.get('id')?.dirty || this.formDelete.get('id')?.touched);
  }

  ngOnInit(): void {
  }

  deleteById() {
    //Llenar
  }

}
