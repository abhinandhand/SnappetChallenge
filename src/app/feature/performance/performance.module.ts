import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformancePageLayoutComponent } from './performance-page-layout/performance-page-layout.component';


@NgModule({
  declarations: [
    PerformancePageLayoutComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule
  ]
})
export class PerformanceModule { }
