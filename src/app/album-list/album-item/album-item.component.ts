import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Album } from '../../model/Album';


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

  onNewElementCancelBtnClick() {
    this.onAlbumNewestDelete.emit(this.album);
  }

  onNewElementConfirmBtnClick() {
    this.confirmNewAlbum();
  }

  onChangeInput(key) {
    const {code} = key;
    if (code == 'Enter') {
      this.confirmNewAlbum();
    }
  }

  private confirmNewAlbum() {
    this.album.title = this.albumTitleField.nativeElement.value;
    this.album.isConfirmed = true;
  }
}
