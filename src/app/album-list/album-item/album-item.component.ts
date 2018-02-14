import {
  Component,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
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

  constructor() {
    this.onAlbumDelete = new EventEmitter();
  }

  ngOnInit() {}

  onAlbumDeleteQuery() {
    this.onAlbumDelete.emit(this.album);
  }
}
