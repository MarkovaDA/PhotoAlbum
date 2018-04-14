import {Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoModalComponent } from './add-photo-modal/add-photo-modal.component';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { Photo } from '../../model/Photo';
import { PhotoService } from '../../api/PhotoService';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  @Input() activeAlbum;
  newImage: Photo;
  constructor(public dialog: MatDialog,
              private photoService: PhotoService) {
  }

  ngOnInit() {}

  launchPhotoPreview(photo: Photo) {
    const photoPreviewModalDialog = this.dialog.open(PhotoGalleryComponent, {
      width: '80%',
      height: '90%',
      data: photo
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
        this.newImage = image;
        this.activeAlbum.photoList.unshift(this.newImage);
        this.uploadFile(image.file, image.file.name, image.description);
      }
    });
  }

  getResourceUrl(photo: Photo): string {
    return `${environment.API_URL}/photo/get?id=${photo.id}`;
  }

  private uploadFile(file: File, title: string, description: string) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.photoService.uploadPhoto(this.activeAlbum.getId(), title, description, formData).subscribe((meta) => {
      this.newImage.id = meta['id'];
    }, (error) => {
      console.log(error);
    });
  }
}
