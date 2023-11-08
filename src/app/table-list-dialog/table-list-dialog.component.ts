import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table-list-dialog',
  templateUrl: './table-list-dialog.component.html',
  styleUrls: ['./table-list-dialog.component.scss']
})
export class TableListDialogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<TableListDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onClick() : void {
    this.dialogRef.close();
  }

}
