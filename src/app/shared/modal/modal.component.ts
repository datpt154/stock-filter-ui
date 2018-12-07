import { Component, OnInit } from '@angular/core';
import { ModalAttribute } from 'src/app/constants/modal-const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public title = ModalAttribute.title;
  public message = ModalAttribute.message;
  public nextLabel = ModalAttribute.nextLabel;
  public closeLabel = ModalAttribute.closeLabel;

  constructor (
    public activeModal: NgbActiveModal 
  ) { }

  ngOnInit() {
  }

}
