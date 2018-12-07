import { Injectable } from '@angular/core';
import { ModalAttribute } from 'src/app/constants/modal-const';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private modalService: NgbModal
  ) { }

  alignTable(item): string {
    if (typeof item === 'number') {
      return 'text-right';
    }

    return 'text-left';
  }

  public openModal(title: string, message: string, nextLabel?: string, closeLabel?: string): Observable<any> {
    ModalAttribute.title = title;
    ModalAttribute.message = message;
    return Observable.create(obser => {
      this.modalService.open(ModalComponent).result.then(
        (next) => {
          obser.next();
          obser.complete();
        }, (close) => {
          obser.eror();
        }
      )
    })
  }
}
