import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FilterByPipe } from './pipes/filter-by.pipe';



@NgModule({
  declarations: [
    ButtonComponent,
    FilterByPipe
  ],
  exports: [
    ButtonComponent,
    FilterByPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
