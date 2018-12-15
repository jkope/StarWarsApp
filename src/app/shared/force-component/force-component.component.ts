import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ForceChangeDialogComponent } from '../force/force-change-dialog/force-change-dialog.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'force-component',
  templateUrl: './force-component.component.html',
  styleUrls: ['./force-component.component.sass']
})


export class ForceComponentComponent implements OnInit {
  @Input() forceStrength: number;
  @Output() onForceChange: EventEmitter<number> = 
    new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  onForceClick() {
    let dialogRef = this.dialog.open(ForceChangeDialogComponent, {
      width: '400px',
      data: {force: this.forceStrength}
    });
    dialogRef.afterClosed().subscribe(force => {
      if (force) {
        this.onForceChange.emit(force);
      }
    });
  }

  get width(): number {
    return this.forceStrength * 11;
  }
}


