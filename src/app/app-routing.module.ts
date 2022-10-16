import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { InsertComponent } from './crud/insert/insert.component';
import { SelectComponent } from './crud/select/select.component';
import { UpdateComponent } from './crud/update/update.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'insert',
    component: InsertComponent
  },
  {
    path: 'select',
    component: SelectComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
