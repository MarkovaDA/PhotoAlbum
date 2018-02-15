import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Photo} from "../../model/Photo";

@Component({
  selector: 'app-add-photo-modal',
  templateUrl: './add-photo-modal.component.html',
  styleUrls: ['./add-photo-modal.component.css']
})
export class AddPhotoModalComponent implements OnInit {
  newPhoto: Photo;
  constructor(public dialogRef: MatDialogRef<AddPhotoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.newPhoto = new Photo();
  }

  ngOnInit() {
  }

  onCancelModalBtnClick() {
    this.dialogRef.close();
  }

  onChangeFileField(event) {
    const { value } = event.srcElement;
    this.newPhoto.src = value;
  }
}
