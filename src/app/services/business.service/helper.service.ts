import {Injectable} from '@angular/core';

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

  getPatternImage(patternIcon: string): string {
    const temp = patternIcon.trim();
    return `assets/chart-pattern/${temp}.jpg`;
  }
}
