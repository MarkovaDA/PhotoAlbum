import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class DeleteModalDialogComponent implements OnInit {
  albumTitle: string;
  constructor(public dialogRef: MatDialogRef<DeleteModalDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.albumTitle = data.title;
  }

  ngOnInit() {
  }

  onNoModalBtnClick() {
    this.dialogRef.close();
  }
}
