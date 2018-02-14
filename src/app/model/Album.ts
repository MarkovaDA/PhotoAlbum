export enum AlbumMode {
  Newest,//вновь созданный
  Edited, //редактируемый
  Confirmed //подтвержденный
}

export class Album {
  title: string;
  mode: AlbumMode;
  creationDate: Date;

  public constructor(title: string) {
    this.title = title;
    this.creationDate = new Date();
    this.mode = AlbumMode.Confirmed;
  }

  public isNewest() {
    return this.mode == AlbumMode.Newest;
  }

  public isConfirmed() {
    return this.mode == AlbumMode.Confirmed;
  }

  public isEdited() {
    return this.mode == AlbumMode.Edited;
  }
}
