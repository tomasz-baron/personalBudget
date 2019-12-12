import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Account } from 'src/app/shared/model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public addAccount(newAccount: Account): Observable<Account> {
    return this.http.post<Account>(`${this.url}accounts`, newAccount);
  }

  public updateAccount(id: string, updatedAccount: Account) {
    return this.http.patch<Account>(`${this.url}accounts/${id}`, updatedAccount);
  }

  public enableAccount(id: string) {
    return this.http.post<Account>(`${this.url}accounts/${id}/enable`, 'true');
  }

  public disableAccount(id: string) {
    return this.http.post<Account>(`${this.url}accounts/${id}/disable`, 'true');
  }
  
  public getAccounts(type: string): Observable<Account[]> {
    let params = new HttpParams();
    if (type) {
      params = new HttpParams().set('type', type);
    }
    return this.http.get<Account[]>(`${this.url}accounts`, {params});
  }

  public calculateSummary(accounts: Account[]): number {
    const filteredAccounts: Account[] = accounts
      .filter((account: Account) => account.included);
    if (filteredAccounts.length) {
      const summary: number = filteredAccounts
        .map((account: Account) => account.balance)
        .reduce((prev: number, curr: number) => prev + curr);
      return summary;
    }
    return 0;
  }
}
