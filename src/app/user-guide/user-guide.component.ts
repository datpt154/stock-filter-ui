import { Component, OnInit, ElementRef } from '@angular/core';
import { UserGuideData, UserGuideDataType } from '../constants/user-guide-data';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.scss']
})
export class UserGuideComponent implements OnInit {

  constructor(
    private elementRef: ElementRef, 
  ) { }

  public userGuideData = UserGuideData;
  public userGuideDataType = UserGuideDataType;
  ngOnInit() {
  }
  public scrollToElement(id: string) {
    const element = this.elementRef.nativeElement.querySelector('#'+ id);
    if (element) {
      element.scrollIntoView();
    }
  }
}
