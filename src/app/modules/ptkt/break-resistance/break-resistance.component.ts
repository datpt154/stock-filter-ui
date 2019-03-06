import { Component, OnInit } from '@angular/core';
import { PTKTDto } from '../../../interface/ptkt-dto';
import { FilterService } from '../../../services/business.service/filter.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-break-resistance',
  templateUrl: './break-resistance.component.html',
  styleUrls: ['./break-resistance.component.scss']
})
export class BreakResistanceComponent implements OnInit {
  data: PTKTDto;
  logginUser$ = this.store.select(store => store.logginUser);
  imageURL = '';

  temp = [
    'Double_Top',
    'Double_Bottom',
    'HAS',
    'Inverse_HAS',
    'Falling_Wedge',
    'Rising_Wedge',
    'Triple_Top',
    'Triple_Bottom',
    'Bull_Flag',
    'Bear_Flag',
    'Bull_Pennant',
    'Bear_Pennant',
    'Bull_sym_tri',
    'Bear_sym_tri',
    'Ascending_Tri',
    'Descending_Tri',
    'Bull_Rectangle',
    'Bear_Rectangle',
    'Price_Channel_up',
    'Price_Channel_down',
    'Cup_and_Handle',
    'Break_Ressitance',
    'Break_Support',
    'W_BB',
    'M_BB',
    'MACD_PKD',
    'MACD_PKA',
    'RSI_PKD',
    'RSI_PKA'
  ];

  constructor(private filter: FilterService, private store: Store<AppState>, private modalService: NgbModal) {}

  ngOnInit() {
    this.filter.getScreenBreakResistance().subscribe(data => {
      this.data = data;
    });
  }

  openChart(content, imageURL) {
    this.imageURL = imageURL;
    this.modalService.open(content, { centered: true,  });
  }
}
