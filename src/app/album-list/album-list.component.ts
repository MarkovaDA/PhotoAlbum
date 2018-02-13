import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Album } from '../model/Album';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albumList: Album[];
  constructor(public dialog: MatDialog) {
    this.albumList = [];
    for (let i = 0; i < 10; i++) {
      this.albumList.push(new Album(`Album № ${i + 1}`, true));
    }
  }

  ngOnInit() {
  }

  createAlbum() {
    const length = this.albumList.length;
    this.albumList.unshift(new Album(`Album № ${length + 1}`, false));
  }

  deleteAlbum(album: Album) {
    let modalDialog = this.openModalDialog(album);
    modalDialog.afterClosed().subscribe(album => {
      if (album) {
        //удаление альбома из списка
        this.removeAlbumFromList(album);
      }
    });
  }

  private openModalDialog(data: Album) {
    return this.dialog.open(ModalDialogComponent, {
      width: 'auto',
      data: data
    });
  }

  removeAlbumFromList(album: Album) {
    const index = this.albumList.indexOf(album);
    this.albumList.splice(index, 1);
  }
}
