import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWork } from '../interfaces/IWork';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  headers = {
    Authorization:
      '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',
  };
  GithubURL = `https://api.github.com/users/caiossilva/repos`;

  public GetWorks(): Observable<IWork[]> {
    return this.http.get<IWork[]>(this.GithubURL, { headers: this.headers });
  }
}
