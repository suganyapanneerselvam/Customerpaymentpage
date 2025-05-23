import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  showPaymentForm: boolean = false;
  months: string[] = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')); // ["01", "02", ..., "12"]
  years: string[] = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() + i).toString().slice(-2)); // ["25", "26", ..., "34"]
  paymentMethods: { cardholderName: string, cardNumber: string, expMonth: string, expYear: string, cvv: string }[] = [
    { cardholderName: 'suganya panneerselvam', cardNumber: '**** **** **** 1234', expMonth: '12', expYear: '25', cvv: '123' }
  ];

  togglePaymentForm() {
    this.showPaymentForm = !this.showPaymentForm;
  }

  addPaymentMethod(formData: { cardholderName: string, cardNumber: string, expMonth: string, expYear: string, cvv: string }) {
    if (formData.cardholderName && formData.cardNumber && formData.expMonth && formData.expYear && formData.cvv) {
      const maskedCardNumber = `**** **** **** ${formData.cardNumber.slice(-4)}`;
      this.paymentMethods.push({
        cardholderName: formData.cardholderName,
        cardNumber: maskedCardNumber,
        expMonth: formData.expMonth,
        expYear: formData.expYear,
        cvv: formData.cvv
      });
      this.showPaymentForm = false;
    }
  }

  removePaymentMethod(index: number) {
    this.paymentMethods.splice(index, 1);
  }
}