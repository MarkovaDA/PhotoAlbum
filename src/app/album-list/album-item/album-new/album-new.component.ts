import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Album, AlbumMode} from "../../../model/Album";

@Component({
  selector: 'app-album-new',
  templateUrl: './album-new.component.html',
  styleUrls: ['./album-new.component.css']
})
export class AlbumNewComponent implements OnInit {
  @Input() album: Album;
  @ViewChild('albumTitleField') albumTitleField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onNewElementConfirmBtnClick() {
    this.confirmNewAlbum(this.albumTitleField.nativeElement.value);
  }

  onNewElementCancelBtnClick() {
    this.album.mode =  AlbumMode.Deleted;
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
}
