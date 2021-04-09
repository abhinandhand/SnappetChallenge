import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyClassPageLayoutComponent } from './my-class-page-layout/my-class-page-layout.component';

const routes: Routes = [
  {path: '', component: MyClassPageLayoutComponent},
  {path: 'class-overview', component: MyClassPageLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyClassRoutingModule { }
