import {Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoModalComponent } from './add-photo-modal/add-photo-modal.component';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  @Input() activeAlbum;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  launchPhotoPreview() {
    const photoPreviewModalDialog = this.dialog.open(PhotoGalleryComponent, {
      width: '80%',
      height: '90%',
      data: null
    });
  }

  launchAddPhotoModal() {
    const addPhotoModalDialog = this.dialog.open(AddPhotoModalComponent, {
      width: '500px',
      data: null
    });
    // подписываемся на события диалогового окна
    addPhotoModalDialog.afterClosed().subscribe(image => {
      if (image && image.isConfirmed) {
        this.activeAlbum.photoList.unshift(image);
      }
    });
  }
}
