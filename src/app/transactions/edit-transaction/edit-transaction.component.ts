import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent implements OnInit {
  transactionForm: FormGroup;
  currencies: string[] = [
    'PLN',
    'EUR'
  ];

  transactionTypes: string[] = [
    'INTERNAL',
    'OUTGOING',
    'INCOMING'
  ];

  transactionCategories: string[] = [
    'CLOTHES',
    'FOOD',
    'ENTERTAINMENT',
    'EDUCATION',
    'SPORT',
    'DIY',
    'HEALTH',
    'IT',
    'ELECTRONICS',
    'APARTMENT',
    'CHARGES'
  ]

  constructor(private dialogRef: MatDialogRef<EditTransactionComponent>) { }

  ngOnInit() {
    this.initForm();
  }

  public save() {
    console.log(this.transactionForm.value);
  }

  public cancel():void {
    this.dialogRef.close();
  }

  private initForm() {
    this.transactionForm = new FormGroup({
      date: new FormControl(new Date(), [Validators.required]),
      description: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      fromAccountId: new FormControl(),
      toAccountId: new FormControl(),
      amount: new FormControl('', [Validators.required]),
      currency: new FormControl('PLN', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }

}
