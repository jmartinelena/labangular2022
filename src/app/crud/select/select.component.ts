import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  formSelectById = this.fb.group({
    id: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9]|[1-9][0-9]+$')]]
  })

  invalidId() {
    return this.formSelectById.get('id')?.invalid && (this.formSelectById.get('id')?.dirty || this.formSelectById.get('id')?.touched);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getById() {
    //llenar
  }

}
