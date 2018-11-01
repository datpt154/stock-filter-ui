import { Component, OnInit } from '@angular/core';
import { PTKTDto } from '../../../interface/ptkt-dto';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-swing-trade',
  templateUrl: './swing-trade.component.html',
  styleUrls: ['./swing-trade.component.css']
})
export class SwingTradeComponent implements OnInit {

  data: PTKTDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScreenBreakResistance().subscribe(data => {
      this.data = data;
    });
  }

}
