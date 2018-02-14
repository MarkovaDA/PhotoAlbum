export class Album {
  title: string;
  isConfirmed: boolean;
  //isNewest (вновь добавленный), isEdited (редактируемый),
  //порядок чтения шаблонов - isEdited, isNewest, (!isNewest)
  creationDate: Date;
  public constructor(title: string, isConfirmed: boolean) {
    this.title = title;
    this.isConfirmed = isConfirmed;
    this.creationDate = new Date();
  }
}
