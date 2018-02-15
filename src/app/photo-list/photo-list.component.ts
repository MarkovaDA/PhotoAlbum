import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoModalComponent } from "./add-photo-modal/add-photo-modal.component";
import { Photo } from '../model/Photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photoList: Photo[];
  @Input() activeAlbum;

  constructor(public dialog: MatDialog) {
    this.photoList = [];
  }

  ngOnInit() {

  }

  launchAddPhotoModal() {
    const addPhotoModalDialog = this.dialog.open(AddPhotoModalComponent, {
      width: '500px',
      data: null
    });
    addPhotoModalDialog.afterClosed().subscribe(image => {
      if (image) {
        this.photoList.unshift(image);
        console.log(this.photoList);
        //добавить фотографию в список и отобразить на экране
        //потография должна оссациироваться с альбомом
      }
    });
  }
}
