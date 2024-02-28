import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMusic } from '../interfaces/IMusic';

@Injectable({
  providedIn: 'root',
})
export class PlayingnowService {
  constructor(private http: HttpClient) {}

  ScrobleURL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=CaioSSilva&api_key=56b08dcc07c87f2bdb394dee34a93165&format=json&limit=1`;

  public GetMusic(): Observable<IMusic> {
    return this.http.get<IMusic>(this.ScrobleURL);
  }
}
