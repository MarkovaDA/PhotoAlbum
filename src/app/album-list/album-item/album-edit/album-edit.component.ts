import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Album, AlbumMode} from '../../../model/Album';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {
  @Input() album: Album;
  @ViewChild('albumEditedTitleField') albumEditedTitleField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onEditedElementConfirmBtnClick() {
    this.confirmNewAlbum(this.albumEditedTitleField.nativeElement.value);
  }

  onEditResetBtnClick() {
    this.album.mode = AlbumMode.Confirmed;
  }

  private confirmNewAlbum(title: string) {
    this.album.title = title;
    this.album.mode = AlbumMode.Confirmed;
  }

  onInputEntered(key) {
    const { code } = key;
    if (code === 'Enter') {
      this.confirmNewAlbum(this.albumEditedTitleField.nativeElement.value);
    }
  }
}
