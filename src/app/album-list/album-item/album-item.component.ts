import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from '../../model/Album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input()
  album: Album;

  @Output()
  onAlbumDeleteClick: EventEmitter<Album>;

  constructor() {
    this.onAlbumDeleteClick = new EventEmitter();
  }

  ngOnInit() {
  }

  onDeleteBtnClick() {
    this.onAlbumDeleteClick.emit(this.album);
  }
}
