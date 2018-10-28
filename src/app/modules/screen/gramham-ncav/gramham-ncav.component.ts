import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { ScreenDto } from '../../../interface/screen-dto';

@Component({
  selector: 'app-gramham-ncav',
  templateUrl: './gramham-ncav.component.html',
  styleUrls: ['./gramham-ncav.component.css']
})
export class GramhamNcavComponent implements OnInit {
  data: ScreenDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScrenNCAV().subscribe(data => {
      this.data = data;
    });
  }

}
