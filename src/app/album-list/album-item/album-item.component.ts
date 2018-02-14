import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Album, AlbumMode } from '../../model/Album';


@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album;
  @Output() onAlbumDelete: EventEmitter<Album>;
  @Output() onAlbumNewestDelete: EventEmitter<Album>;
  @ViewChild('albumTitleField') albumTitleField: ElementRef;
  @ViewChild('albumEditedTitleField') albumEditedTitleField: ElementRef;

  datePattern = 'MM/dd/yyyy';

  constructor() {
    this.onAlbumDelete = new EventEmitter();
    this.onAlbumNewestDelete = new EventEmitter();
  }

  ngOnInit() {

  }

  onDeleteBtnClick() {
    this.onAlbumDelete.emit(this.album);
  }

  onEditBtnClick() {
    this.album.mode = AlbumMode.Edited;
  }

  onNewElementCancelBtnClick() {
    this.onAlbumNewestDelete.emit(this.album);
  }

  onNewElementConfirmBtnClick() {
    this.confirmNewAlbum(this.albumTitleField.nativeElement.value);
  }

  onEditedElementConfirmBtnClick() {
    this.confirmNewAlbum(this.albumEditedTitleField.nativeElement.value);
  }

  onInputEntered(key) {
    const {code} = key;
    if (code == 'Enter') {
      this.confirmNewAlbum(this.albumTitleField.nativeElement.value);
    }
  }

  private confirmNewAlbum(title: string) {
    this.album.title = title;
    this.album.mode = AlbumMode.Confirmed;
  }

  onEditResetBtnClick() {
    this.album.mode = AlbumMode.Confirmed;
  }
}
