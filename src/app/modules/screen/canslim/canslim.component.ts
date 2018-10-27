import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-canslim',
  templateUrl: './canslim.component.html',
  styleUrls: ['./canslim.component.css']
})
export class CanslimComponent implements OnInit {
  data: any;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScreenNetNet().subscribe(data => {
      this.data = data;
    });
  }

}
