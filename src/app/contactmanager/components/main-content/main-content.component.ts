import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  private navigationList: any[] = [
    {
      parentItem: 'FinaPro',
      childrenItems: [
        'Gioi Thieu FinaPro',
        'Bang gia',
        'Tai FinaPro'
      ]
    },
    {
      parentItem: 'Bao Cao Phan Tich',
      childrenItems: [
        'FinaPro phan tich',
        'Tong hop bao cao',
      ]
    },
    {
      parentItem: 'Danh Muc Dau Tu',
      childrenItems: [
      ]
    }
  ];

  ngOnInit() {
  }

}
