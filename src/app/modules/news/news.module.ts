import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CreateNewsComponent } from './create-news/create-news.component';
import { MaterialModule } from '../../shared/angular-material-design/material.module';
import { ListNewsComponent } from './list-news/list-news.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routers: Routes = [
  { path: 'createNews', component: CreateNewsComponent },
  { path: 'editNews/:id', component: CreateNewsComponent },
  { path: 'listNews', component: ListNewsComponent },
  { path: 'newsDetail/:id', component: DetailNewsComponent },
  { path: '**', redirectTo: 'listNews' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    SharedModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    RouterModule.forChild(routers)
  ],
  declarations: [
    CreateNewsComponent,
    ListNewsComponent,
    DetailNewsComponent
  ]
})
export class NewsModule { }
