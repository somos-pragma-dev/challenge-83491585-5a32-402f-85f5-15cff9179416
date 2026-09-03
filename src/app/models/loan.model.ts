export interface Loan {
  id: number;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}