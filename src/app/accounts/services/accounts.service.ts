import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Account } from 'src/app/shared/model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.url}accounts`);
  }
}
