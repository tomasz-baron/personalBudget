import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from 'src/app/shared/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  url = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  public addTransaction(newTransaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.url}transactions`, newTransaction);
  }

  public updateTransaction(id: string, updatedTransaction: Transaction): Observable<Transaction> {
    return this.http.patch<Transaction>(`${this.url}transactions/${id}`, updatedTransaction);
  }

  public removeTransaction(id: string): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.url}transactions/${id}`);
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.url}transactions`);
  }

}
