import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DeleteModalDialogComponent } from './album-list/delete-modal-dialog/modal-dialog.component';
import { AutofocusDirective } from "./directives/AutofocusDirective";
import { AlbumNewComponent } from "./album-list/album-item/album-new/album-new.component";
import { AlbumEditComponent } from "./album-list/album-item/album-edit/album-edit.component";
import { AlbumConfirmedComponent } from "./album-list/album-item/album-confirmed/album-confirmed.component";
import { AddPhotoModalComponent } from "./photo-list/add-photo-modal/add-photo-modal.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumListComponent,
    PhotoListComponent,
    AlbumItemComponent,
    PhotoItemComponent,
    DeleteModalDialogComponent,
    AutofocusDirective,
    AlbumNewComponent,
    AlbumEditComponent,
    AlbumConfirmedComponent,
    AddPhotoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [DeleteModalDialogComponent, AddPhotoModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://material.io/icons/ - список иконок
