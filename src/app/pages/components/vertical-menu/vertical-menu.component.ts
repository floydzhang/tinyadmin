import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  // templateUrl: './vertical-menu.component.html',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
