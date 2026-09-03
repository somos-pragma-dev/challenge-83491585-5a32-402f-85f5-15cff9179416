import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanSignal {
  private loanStatusSubject = new BehaviorSubject<string>('');
  loanStatus$ = this.loanStatusSubject.asObservable();

  updateLoanStatus(status: string) {
    this.loanStatusSubject.next(status);
  }
}