import { Component, OnInit } from '@angular/core';
import { GrahamChecklistDto } from '../../../interface/screen-dto';
import { FilterService } from '../../../services/business.service/filter.service';

@Component({
  selector: 'app-graham-checklist',
  templateUrl: './graham-checklist.component.html',
  styleUrls: ['./graham-checklist.component.css']
})
export class GrahamChecklistComponent implements OnInit {
  data: GrahamChecklistDto;

  constructor(private filter: FilterService) { }

  ngOnInit() {
    this.filter.screnGrahamChecklist().subscribe(data => {
      this.data = data;
    });
  }

}
