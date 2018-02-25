import { Photo } from './Photo';

export enum AlbumMode {
  Newest, // вновь созданный
  Edited, // редактируемый
  Confirmed, // подтвержденный
  Deleted
}

export class Album {
  title: string;
  mode: AlbumMode;
  creationDate: Date;
  photoList: Array<Photo>;
  public constructor(title: string) {
    this.title = title;
    this.creationDate = new Date();
    this.mode = AlbumMode.Confirmed;
    this.photoList = [];
  }

  public isNewest() {
    return this.mode === AlbumMode.Newest;
  }

  public isConfirmed() {
    return this.mode === AlbumMode.Confirmed;
  }

  public isEdited() {
    return this.mode === AlbumMode.Edited;
  }

  public isDeleted() {
    return this.mode === AlbumMode.Deleted;
  }
}
