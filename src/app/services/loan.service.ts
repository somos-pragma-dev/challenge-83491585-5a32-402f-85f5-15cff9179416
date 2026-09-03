import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Loan } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private loansSubject = new BehaviorSubject<Loan[]>([]);
  loans$ = this.loansSubject.asObservable();

  addLoan(loan: Loan) {
    const loans = this.loansSubject.getValue();
    loans.push(loan);
    this.loansSubject.next(loans);
  }
}