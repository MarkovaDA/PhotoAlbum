export class Album {
  title: string;
  isConfirmed: boolean;
  creationDate: Date;
  public constructor(title: string, isConfirmed: boolean) {
    this.title = title;
    this.isConfirmed = isConfirmed;
    this.creationDate = new Date();
  }
}
