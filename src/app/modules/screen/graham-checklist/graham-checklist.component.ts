import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { ScreenDto } from '../../../interface/screen-dto';

@Component({
  selector: 'app-graham-checklist',
  templateUrl: './graham-checklist.component.html',
  styleUrls: ['./graham-checklist.component.css']
})
export class GrahamChecklistComponent implements OnInit {
  data: ScreenDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.screnGrahamChecklist().subscribe(data => {
      this.data = data;
    });
  }

}
