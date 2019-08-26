import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliceArrayPipe} from './pipes.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SliceArrayPipe
  ],
  exports: [
    SliceArrayPipe
  ]
})
export class PipeModule { }
