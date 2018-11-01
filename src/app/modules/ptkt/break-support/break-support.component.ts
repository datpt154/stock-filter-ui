import { Component, OnInit } from '@angular/core';
import { PTKTDto } from '../../../interface/ptkt-dto';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-break-support',
  templateUrl: './break-support.component.html',
  styleUrls: ['./break-support.component.css']
})
export class BreakSupportComponent implements OnInit {

  data: PTKTDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScreenBreakResistance().subscribe(data => {
      this.data = data;
    });
  }

}
