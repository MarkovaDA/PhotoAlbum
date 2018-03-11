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
import { PhotoListComponent } from './main/photo-list/photo-list.component';
import { AutofocusDirective } from './directives/AutofocusDirective';
import { AddPhotoModalComponent } from './main/photo-list/add-photo-modal/add-photo-modal.component';
import { SelectedDirective } from './directives/SelectedDirective';
import { PhotoGalleryComponent } from './main/photo-gallery/photo-gallery.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AlbumListComponent } from './main/album-list/album-list.component';
import { AlbumItemComponent } from './main/album-list/album-item/album-item.component';
import { DeleteModalDialogComponent } from './main/album-list/delete-modal-dialog/modal-dialog.component';
import { AlbumNewComponent } from './main/album-list/album-item/album-new/album-new.component';
import { AlbumEditComponent } from './main/album-list/album-item/album-edit/album-edit.component';
import { AlbumConfirmedComponent } from './main/album-list/album-item/album-confirmed/album-confirmed.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumListComponent,
    PhotoListComponent,
    AlbumItemComponent,
    DeleteModalDialogComponent,
    AlbumNewComponent,
    AlbumEditComponent,
    AlbumConfirmedComponent,
    AddPhotoModalComponent,
    AutofocusDirective,
    SelectedDirective,
    PhotoGalleryComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [DeleteModalDialogComponent, AddPhotoModalComponent, PhotoGalleryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
