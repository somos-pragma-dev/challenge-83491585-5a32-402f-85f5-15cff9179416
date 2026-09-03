import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanRequestComponent } from './loan-request.component';
import { LoanService } from '../services/loan.service';
import { LoanSignal } from '../signals/loan-signal';

describe('LoanRequestComponent', () => {
  let component: LoanRequestComponent;
  let fixture: ComponentFixture<LoanRequestComponent>;
  let loanService: jasmine.SpyObj<LoanService>;
  let loanSignal: jasmine.SpyObj<LoanSignal>;

  beforeEach(async () => {
    const loanServiceSpy = jasmine.createSpyObj('LoanService', ['addLoan']);
    const loanSignalSpy = jasmine.createSpyObj('LoanSignal', ['updateLoanStatus']);

    await TestBed.configureTestingModule({
      declarations: [ LoanRequestComponent ],
      providers: [
        { provide: LoanService, useValue: loanServiceSpy },
        { provide: LoanSignal, useValue: loanSignalSpy }
      ]
    }).compileComponents();

    loanService = TestBed.inject(LoanService) as jasmine.SpyObj<LoanService>;
    loanSignal = TestBed.inject(LoanSignal) as jasmine.SpyObj<LoanSignal>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loanService.addLoan when requestLoan is called', () => {
    component.requestLoan();
    expect(loanService.addLoan).toHaveBeenCalled();
  });

  it('should call loanSignal.updateLoanStatus when requestLoan is called', () => {
    component.requestLoan();
    expect(loanSignal.updateLoanStatus).toHaveBeenCalledWith('solicitud enviada');
  });
});