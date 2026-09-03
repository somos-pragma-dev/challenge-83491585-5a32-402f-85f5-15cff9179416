import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Loan } from '../models/loan.model';
import { LoanSignal } from '../signals/loan-signal';

@Component({
  selector: 'app-loan-request',
  template: `
    <div>
      <h2>Solicitud de Préstamo</h2>
      <p>Estado del préstamo: {{ loanStatus }}</p>
      <button (click)="requestLoan()">Solicitar Préstamo</button>
    </div>
  `,
  standalone: true,
  imports: []
})
export class LoanRequestComponent implements OnInit {
  loanStatus: string = '';

  constructor(private loanService: LoanService, private loanSignal: LoanSignal) {}

  ngOnInit(): void {
    this.loanSignal.loanStatus$.subscribe(status => this.loanStatus = status);
  }

  requestLoan() {
    const loan: Loan = { id: 1, amount: 1000, status: 'pending' };
    this.loanService.addLoan(loan);
    this.loanSignal.updateLoanStatus('solicitud enviada');
  }
}