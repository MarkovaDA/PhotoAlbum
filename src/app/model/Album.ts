import { Photo } from './Photo';

export enum AlbumMode {
  Newest, // вновь созданный
  Edited, // редактируемый
  Confirmed, // подтвержденный
  Deleted
}

export class Album {
  id: number;
  title: string; // название
  mode: AlbumMode; // режим
  creationDate: Date; // дата создания
  photoList: Array<Photo>; // список фотографий
  public constructor(id: number, title: string) {
    this.title = title;
    this.creationDate = new Date();
    this.mode = AlbumMode.Confirmed;
    this.photoList = [];
    this.id = id;
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

  public getId() {
    return this.id;
  }
}
