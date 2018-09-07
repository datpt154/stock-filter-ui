import { NgModule } from '@angular/core';
import { MaterialModule } from './angular-material-design/material.module';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    NavigationListComponent,
    ServicesModule,
    HeaderComponent
  ],
  declarations: [NavigationListComponent, HeaderComponent]
})
export class SharedModule { }
