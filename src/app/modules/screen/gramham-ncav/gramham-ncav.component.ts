import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-gramham-ncav',
  templateUrl: './gramham-ncav.component.html',
  styleUrls: ['./gramham-ncav.component.css']
})
export class GramhamNcavComponent implements OnInit {
  data: any;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScreenNetNet().subscribe(data => {
      this.data = data;
    });
  }

}
