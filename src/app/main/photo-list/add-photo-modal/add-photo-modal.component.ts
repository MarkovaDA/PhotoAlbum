import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Photo } from '../../../model/Photo';

@Component({
  selector: 'app-add-photo-modal',
  templateUrl: './add-photo-modal.component.html',
  styleUrls: ['./add-photo-modal.component.css']
})
export class AddPhotoModalComponent implements OnInit {
  newPhoto: Photo;
  constructor(public dialogRef: MatDialogRef<AddPhotoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.newPhoto = new Photo();
  }

  onCancelModalBtnClick() {
    this.dialogRef.close();
  }

  onChangeFileField(event) {
    if (event.target.files && event.target.files[0]) {
      this.newPhoto.isConfirmed = true;
      // изменить эту конструкцию
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newPhoto.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
