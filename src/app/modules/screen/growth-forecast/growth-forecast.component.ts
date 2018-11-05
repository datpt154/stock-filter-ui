import { Component, OnInit } from '@angular/core';
import { DBTTMDto } from '../../../interface/screen-dto';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-growth-forecast',
  templateUrl: './growth-forecast.component.html',
  styleUrls: ['./growth-forecast.component.css']
})
export class GrowthForecastComponent implements OnInit {

  data: DBTTMDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getscreenDBTTM().subscribe(data => {
      this.data = data;
    });
  }

}
