import { Component, OnInit } from '@angular/core';
import { PTKTDto } from '../../../interface/ptkt-dto';
import { FilterService } from '../../../services/business.service/filter.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/reducers';

@Component({
  selector: 'app-break-resistance',
  templateUrl: './break-resistance.component.html',
  styleUrls: ['./break-resistance.component.css']
})
export class BreakResistanceComponent implements OnInit {

  data: PTKTDto;
  logginUser$ = this.store.select(store => store.logginUser);

  constructor(
    private filter: FilterService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.filter.getScreenBreakResistance().subscribe(data => {
      this.data = data;
    });
  }

}
