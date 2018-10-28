import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { ScreenDto } from '../../../interface/screen-dto';

@Component({
  selector: 'app-fisher',
  templateUrl: './fisher.component.html',
  styleUrls: ['./fisher.component.css']
})
export class FisherComponent implements OnInit {
  data: ScreenDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScrenPhilipFisherGrowth().subscribe(data => {
      this.data = data;
    });
  }

}
