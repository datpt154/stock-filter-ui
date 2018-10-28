import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { ScreenDto } from 'src/app/interface/screen-dto';

@Component({
  selector: 'app-canslim',
  templateUrl: './canslim.component.html',
  styleUrls: ['./canslim.component.css']
})
export class CanslimComponent implements OnInit {
  data: ScreenDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScrenCANSLIM().subscribe(data => {
      this.data = data;
    });
  }

}
