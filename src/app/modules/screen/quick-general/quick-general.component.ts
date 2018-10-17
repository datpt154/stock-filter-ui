import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-general',
  templateUrl: './quick-general.component.html',
  styleUrls: ['./quick-general.component.css']
})
export class QuickGeneralComponent implements OnInit {

  constructor() { }

  data: any = {
    quater: [
      ['VMC', 2392.5 ],
      ['VMC', 2392.5 ],
      ['VMC', 2392.5 ],
      ['VMC', 2392.5 ],
      ['VMC', 2392.5 ],
    ],
    year: [
      ['VNM', 2392.5 ],
      ['HPG', 2392.5 ],
      ['FLC', 2392.5 ],
      ['VMC', 2392.5 ],
      ['ROS', 2392.5 ],
    ],
    tmt: [
      ['HAG', 2392.5 ],
      ['GAS', 2392.5 ],
      ['FLC', 2392.5 ],
      ['VMC', 2392.5 ],
      ['ROS', 2392.5 ],
    ]
  };

  ngOnInit() {
  }

}
