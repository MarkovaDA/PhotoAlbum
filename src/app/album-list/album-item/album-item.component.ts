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
  @Output() onAlbumSelfDelete: EventEmitter<Album>;
  @ViewChild('albumTitleField') albumTitleField: ElementRef;

  constructor() {
    this.onAlbumDelete = new EventEmitter();
    this.onAlbumSelfDelete = new EventEmitter();
  }

  ngOnInit() {

  }

  onDeleteBtnClick() {
    this.onAlbumDelete.emit(this.album);
  }

  onNewElementCancelBtnClick() {
    this.onAlbumSelfDelete.emit(this.album);
  }

  onNewElementConfirmBtnClick(newTitle: string) {
    this.album.title = newTitle;
    this.album.isConfirmed = true;
  }
}
