import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {
  @Input() navItem: any;

  constructor() { }

  ngOnInit() {
  }

}
