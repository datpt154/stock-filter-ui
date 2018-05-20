import { NgModule } from '@angular/core';
import { MaterialModule } from './angular-material-design/material.module';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    NavigationListComponent,
    HeaderComponent
  ],
  declarations: [NavigationListComponent, HeaderComponent]
})
export class SharedModule { }
