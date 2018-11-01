import { Component, OnInit } from '@angular/core';
import { PTKTDto } from '../../../interface/ptkt-dto';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-break-resistance',
  templateUrl: './break-resistance.component.html',
  styleUrls: ['./break-resistance.component.css']
})
export class BreakResistanceComponent implements OnInit {

  data: PTKTDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScreenBreakResistance().subscribe(data => {
      this.data = data;
    });
  }

}
