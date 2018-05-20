import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacmanager-app',
  template: `
  <app-main-content></app-main-content>
  `,
  styles: []
})
export class ContacmanagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, santitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(santitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

  ngOnInit() {
  }

}
