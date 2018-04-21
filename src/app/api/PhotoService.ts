import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './AuthService';
import { Photo } from '../model/Photo';

@Injectable()
export class PhotoService {
  constructor(private httpClient: HttpClient,
              private authService: AuthService) {}

  public uploadPhoto(albumId: number, title: string, description: string, file: FormData): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/photo/upload`,
      file, {
        headers: this.authService.getAuthHeader()
          // .append('Content-Type', 'multipart/form-data');
          .append('enctype', 'multipart/form-data')
          .append('Accept', 'application/json'),
        params: new HttpParams()
          .set('albumId', `${albumId}`)
          .set('title', title)
          .set('description', description)
    });
  }

  public getPhotoInAlbum(albumId: number): Observable<any> {
    return this.httpClient.get<Photo>(`${environment.API_URL}/photo/list`, {
      headers: this.authService.getAuthHeader()
        .append('Accept', 'application/json'),
      params: new HttpParams()
        .set('albumId', `${albumId}`)
    });
  }

  public deletePhotos(ids: [string]): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/photo/delete`, ids, {
      headers: this.authService.getAuthHeader()
        .append('Accept', 'application/json'),
    });
  }

  public getResourceUrl(id: string): string {
    return `${environment.API_URL}/photo/get?id=${id}`;
  }
}
