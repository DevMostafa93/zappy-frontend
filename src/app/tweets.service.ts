import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class TweetsService {

  constructor(private http: HttpClient) { }

  public getTweets(query: any): Observable<any> {
    const params = new HttpParams()
      .set('page', query.page)
      .set('size', query.size)
      .set('text', query.text || '')
      .set('created_at_from', query.from || '')
      .set('created_at_to', query.to || '')
    return this.http.get(`${environment.apiUrl}/tweets`, { params: params });
  }

}
