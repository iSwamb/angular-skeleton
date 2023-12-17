import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    // Set your shared components here
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    // Set your shared components here
  ]
})
export class SharedModule { }
