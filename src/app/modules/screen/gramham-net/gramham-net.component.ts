import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { ScreenDto } from '../../../interface/screen-dto';

@Component({
  selector: 'app-gramham-net',
  templateUrl: './gramham-net.component.html',
  styleUrls: ['./gramham-net.component.css']
})
export class GramhamNetComponent implements OnInit {
  data: ScreenDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.getScreenNetNet().subscribe(data => {
      this.data = data;
    });
  }

}
