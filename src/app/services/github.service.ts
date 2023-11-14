import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWork } from '../interfaces/IWork';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  GithubURL = `https://api.github.com/users/caiossilva/repos`;

  public GetWorks(): Observable<IWork[]> {
    return this.http.get<IWork[]>(this.GithubURL);
  }
}
