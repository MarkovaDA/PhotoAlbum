import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { AlbumItemComponent } from './album-list/album-item/album-item.component';
import { PhotoItemComponent } from './photo-list/photo-item/photo-item.component';
import { AddAlbumComponent } from './album-list/add-album/add-album.component';
import { AddPhotoComponent } from './photo-list/add-photo/add-photo.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { AutofocusDirective } from "./directives/AutofocusDirective";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumListComponent,
    PhotoListComponent,
    AlbumItemComponent,
    PhotoItemComponent,
    AddAlbumComponent,
    AddPhotoComponent,
    ModalDialogComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [ModalDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://material.io/icons/ - список иконок
