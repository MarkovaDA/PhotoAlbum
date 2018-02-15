import { Component } from '@angular/core';
import { Album } from './model/Album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeAlbum: Album;

  switchActiveAlbum(album) {
    this.activeAlbum = album;
  }
}
