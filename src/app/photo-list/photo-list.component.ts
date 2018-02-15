import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoModalComponent } from "./add-photo-modal/add-photo-modal.component";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  launchAddPhotoModal() {
    const addPhotoModalDialog = this.dialog.open(AddPhotoModalComponent, {
      width: '500px',
      data: null
    });
    addPhotoModalDialog.afterClosed().subscribe(image => {
      if (image) {
        //добавить фотографию в список и отобразить на экране
        //потография должна оссациироваться с альбомом
      }
    });
  }
}
