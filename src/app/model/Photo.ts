export class Photo {
  id: string; // уникальный идентификатор ресурса
  description = '';  // описание фото
  creationDate: Date; // дата создания
  isConfirmed: boolean;
  file: File;
}
