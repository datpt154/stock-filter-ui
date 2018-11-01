import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { GramhamNCavDto } from '../../../interface/screen-dto';

@Component({
  selector: 'app-gramham-ncav',
  templateUrl: './gramham-ncav.component.html',
  styleUrls: ['./gramham-ncav.component.css']
})
export class GramhamNcavComponent implements OnInit {
  data: GramhamNCavDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScrenNCAV().subscribe(data => {
      this.data = data;
    });
  }

}
