import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContacmanagerAppComponent } from './contacmanager-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

const routers: Routes = [
  {
    path: '', component: ContacmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routers)
  ],
  declarations: [ContacmanagerAppComponent, MainContentComponent, LeftMenuComponent]
})
export class ContactmanagerModule { }
