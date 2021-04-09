import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyClassPageLayoutComponent } from './feature/my-class/my-class-page-layout/my-class-page-layout.component';

const routes: Routes = [
  {path: 'class-performance', loadChildren: () => import('./feature/performance/performance.module').then(m => m.PerformanceModule)},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
