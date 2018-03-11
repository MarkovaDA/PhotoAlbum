import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album, AlbumMode} from '../../../../model/Album';


@Component({
  selector: 'app-album-confirmed',
  templateUrl: './album-confirmed.component.html',
  styleUrls: ['./album-confirmed.component.css']
})
export class AlbumConfirmedComponent implements OnInit {
  @Input() album: Album;
  @Input() isActive: boolean;
  @Output() onAlbumDelete: EventEmitter<Album>;
  datePattern = 'dd.MM.yyyy';

  constructor() {
    this.onAlbumDelete = new EventEmitter();
  }

  ngOnInit() {
  }

  onEditBtnClick() {
    this.album.mode = AlbumMode.Edited;
  }

  onDeleteBtnClick() {
    this.onAlbumDelete.emit(this.album);
  }
}
