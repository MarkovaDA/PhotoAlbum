import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Photo } from '../../model/Photo';
import { PhotoService } from '../../api/PhotoService';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photo: Photo;
  notEditable = true;
  constructor(public dialogRef: MatDialogRef<PhotoGalleryComponent>,
              private photoService: PhotoService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.photo = data;
  }

  ngOnInit() {}

  getPreviewUrl() {
    return this.photoService.getResourceUrl(this.photo.id);
  }

  onCloseGalleryDialog() {

  }

  onNextPhotoQuery() {

  }

  onPrevPhotoQuery() {

  }

}
