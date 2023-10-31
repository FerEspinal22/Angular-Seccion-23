import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';

@NgModule({
  declarations: [
    // Las directivas deben ser declaradas en el module
    CustomLabelDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomLabelDirective,
  ]
})
export class SharedModule { }
