import { Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
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
  selectedAlbum: Album;
  private sourceList: Album[];

  @Output() onSelectedAlbumChanged: EventEmitter<Album>;

  constructor(public dialog: MatDialog) {
    this.albumList = [];

    for (let i = 0; i < 10; i++) {
      this.albumList.push(new Album(`Album № ${i + 1}`));
    }
    this.selectedAlbum = this.albumList[0];
    this.onSelectedAlbumChanged = new EventEmitter();

    this.sourceList = [...this.albumList];
  }

  ngOnInit() {
    this.onSelectedAlbumChanged.emit(this.selectedAlbum);
  }

  createAlbum() {
    const length = this.albumList.length;
    const newAlbum = new Album(`Album № ${length + 1}`);
    newAlbum.mode = AlbumMode.Newest;
    this.albumList.unshift(newAlbum);
    this.sourceList = [...this.albumList];
    this.switchSelectedAlbum(this.albumList[0]);
  }

  deleteAlbum(album: Album) {
    const modalDialog = this.openModalDialog(album);
    modalDialog.afterClosed().subscribe(_album => {
      if (_album) {
        // удаление альбома из списка
        const index = this.removeAlbumFromList(_album);
        this.sourceList = [...this.albumList];
        if (index < this.albumList.length) {
          this.switchSelectedAlbum(this.albumList[index]);
        } else if (index >= 0) {
          this.switchSelectedAlbum(this.albumList[index - 1]);
        }
      }
    });
  }

  removeAlbumFromList(album: Album) {
    const index = this.albumList.indexOf(album);
    this.albumList.splice(index, 1);
    return index;
  }

  findAlbumsByPattern(pattern: string) {
    if (pattern === '') {
      this.resetSearchResults();
      return;
    }
    this.albumList = this.sourceList.filter((album) => {
      return album.title.includes(pattern);
    });
  }

  switchSelectedAlbum(newAlbum: Album) {
    this.selectedAlbum = newAlbum;
    this.onSelectedAlbumChanged.emit(this.selectedAlbum);
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
    this.albumList = this.albumList.filter((album) => {
      return album.mode !== AlbumMode.Deleted;
    });
  }
}
