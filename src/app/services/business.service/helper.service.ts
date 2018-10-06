import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  alignTable(item): string {
    if (typeof item === 'number') {
      return 'text-right';
    }

    return 'text-left';
  }

}
