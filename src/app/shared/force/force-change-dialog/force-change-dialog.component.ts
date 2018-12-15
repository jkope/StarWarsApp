import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'force-change-dialog',
  templateUrl: './force-change-dialog.component.html',
  styleUrls: ['./force-change-dialog.component.sass']
})
export class ForceChangeDialogComponent implements OnInit {

  force: number;

  constructor(private dialogRef: MatDialogRef<ForceChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.force = this.data.force;
  }
  onNoClick() {
    this.dialogRef.close();
  }

}
