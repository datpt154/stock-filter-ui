import { Component, OnInit } from '@angular/core';
import { FinancialIndicatorsGuideData } from '../constants/user-guide-data';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  constructor() { }
  
  public indicatorGuideData = FinancialIndicatorsGuideData;

  ngOnInit() {
  }

}
