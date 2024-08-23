import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';

interface Expense {
  name: string;
  amount: number;
  frequency: string;
  years: number;
  totalExpense: number;
}

@Component({
  selector: 'app-vices-calculator',
  templateUrl: './vices-calculator.component.html',
  styleUrls: ['./vices-calculator.component.scss']
})
export class VicesCalculatorComponent implements OnInit {
  expenseForm: FormGroup;
  expenses: Expense[] = [];
  @ViewChild('resultsSection') resultsSectionRef!: ElementRef;

  frequencyOptions = [
    { value: 'giornaliera', label: 'Giornaliera' },
    { value: 'settimanale', label: 'Settimanale' },
    { value: 'mensile', label: 'Mensile' }
  ];

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      frequency: ['giornaliera', Validators.required],
      years: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.expenseForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      frequency: ['giornaliera', Validators.required],
      years: ['', [Validators.required, Validators.min(1)]]
    });
  }

  calculateAnnualExpense(amount: number, frequency: string): number {
    switch (frequency) {
      case 'giornaliera': return amount * 365;
      case 'settimanale': return amount * 52;
      case 'mensile': return amount * 12;
      default: return 0;
    }
  }

  addExpense(): void {
    if (this.expenseForm.valid) {
      const formValue = this.expenseForm.value;
      const annualExpense = this.calculateAnnualExpense(formValue.amount, formValue.frequency);
      const totalExpense = annualExpense * formValue.years;
      const newExpense: Expense = {
        ...formValue,
        totalExpense
      };
      this.expenses.push(newExpense);
      this.expenseForm.reset({frequency: 'giornaliera'});
    }
  }

  calculateTotalExpense(): number {
    return this.expenses.reduce((total, expense) => total + expense.totalExpense, 0);
  }
  
  exportToImage(): void {
    const content = this.resultsSectionRef.nativeElement as HTMLElement;
    if (!content) return;
    
    html2canvas(content).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'riepilogo-spese-vizi.png';
      link.click();
    });
  }
}
