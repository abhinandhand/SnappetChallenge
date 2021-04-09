import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyClassRoutingModule } from './my-class-routing.module';
import { MyClassPageLayoutComponent } from './my-class-page-layout/my-class-page-layout.component';


@NgModule({
  declarations: [
    MyClassPageLayoutComponent
  ],
  imports: [
    CommonModule,
    MyClassRoutingModule
  ]
})
export class MyClassModule { }
