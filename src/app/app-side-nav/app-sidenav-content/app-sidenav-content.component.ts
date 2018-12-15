import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit,
  AfterViewChecked, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './app-sidenav-content.component.html',
  styleUrls: ['./app-sidenav-content.component.sass']
})
export class AppSidenavContentComponent implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
  }

}
