import { Component, OnInit, ElementRef, Input } from '@angular/core';
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

  @Input() userGuideData = UserGuideData;
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
