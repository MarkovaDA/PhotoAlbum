import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Album } from '../../../model/Album';


@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album;
  @Input() isActive: boolean;
  @Output() onAlbumDelete: EventEmitter<Album>;

  constructor() {
    this.onAlbumDelete = new EventEmitter();
    this.isActive = false;
  }

  ngOnInit() {}

  onAlbumDeleteQuery() {
    this.onAlbumDelete.emit(this.album);
  }
}
