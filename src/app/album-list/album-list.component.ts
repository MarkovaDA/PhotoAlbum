import { Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Album, AlbumMode } from '../model/Album';
import { DeleteModalDialogComponent } from './delete-modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit, OnDestroy {
  albumList: Album[];
  private sourceList: Album[];
  constructor(public dialog: MatDialog) {
    this.albumList = [];
    for (let i = 0; i < 10; i++) {
      this.albumList.push(new Album(`Album № ${i + 1}`));
    }
    this.sourceList = [...this.albumList];
  }

  ngOnInit() {}

  createAlbum() {
    const length = this.albumList.length;
    const newAlbum = new Album(`Album № ${length + 1}`);
    newAlbum.mode = AlbumMode.Newest;
    this.albumList.unshift(newAlbum);
  }

  deleteAlbum(album: Album) {
    const modalDialog = this.openModalDialog(album);
    modalDialog.afterClosed().subscribe(album => {
      if (album) {
        //удаление альбома из списка
        this.removeAlbumFromList(album);
      }
    });
  }

  removeAlbumFromList(album: Album) {
    const index = this.albumList.indexOf(album);
    this.albumList.splice(index, 1);
  }

  findAlbumsByPattern(pattern: string) {
    if (pattern == '') {
      this.resetSearchResults();
      return;
    }
    this.albumList = this.albumList.filter((album) => {
      return album.title.includes(pattern)
    });
  }

  private openModalDialog(data: Album) {
    return this.dialog.open(DeleteModalDialogComponent, {
      width: 'auto',
      data: data
    });
  }

  private resetSearchResults() {
    this.albumList = this.sourceList;
  }

  ngOnDestroy() {
    this.albumList = this.albumList.filter(album => {return album.mode != AlbumMode.Deleted});
  }
}
