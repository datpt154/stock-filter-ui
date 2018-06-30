import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
      parentItem: 'Bảng lọc cơ bản',
      childrenItems: [
      ]
    },
    {
      parentItem: 'Dich Vụ',
      childrenItems: [
      ]
    },
    {
      parentItem: 'Liên hệ',
      childrenItems: [
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
