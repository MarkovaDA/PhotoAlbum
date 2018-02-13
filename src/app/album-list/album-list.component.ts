import { Component, OnInit } from '@angular/core';
import { Album } from '../model/Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albumList: Album[];
  constructor() {
    this.albumList = [];
    for (let i = 0; i < 10; i++) {
      this.albumList.push(new Album(`Album № ${i + 1}`, true));
    }
  }

  ngOnInit() {
  }

}
