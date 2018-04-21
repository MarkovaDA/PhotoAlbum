import {Component, Input, OnChanges, OnInit} from '@angular/core';
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
export class PhotoListComponent implements OnInit, OnChanges {
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

  ngOnChanges() {
    this.photoService.getPhotoInAlbum(this.activeAlbum.getId()).subscribe((list: Photo[]) => {
      this.activeAlbum.photoList = list;
    });
  }

  setSelected($event, photo) {
    photo.selected = $event.checked;
  }

  confirmDelete() {
    const list = this.activeAlbum.photoList;
    const deletedPhotos = this.activeAlbum.photoList
      .filter((photo) => photo.selected === true)
      .map(photo => photo.id);

    this.photoService.deletePhotos(deletedPhotos).subscribe(() => {
      this.activeAlbum.photoList = list.filter((photo) => !photo.selected);
    });
  }

  isSmthPhotoSelected(): boolean {
    return this.activeAlbum.photoList.filter((photo) => photo.selected === true).length > 0;
  }
}
