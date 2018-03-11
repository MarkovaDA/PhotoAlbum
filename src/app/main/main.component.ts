import { Component, OnInit } from '@angular/core';
import {Album} from '../model/Album';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  activeAlbum: Album;
  constructor() { }

  ngOnInit() {
  }

  switchActiveAlbum(album) {
    this.activeAlbum = album;
  }
}
