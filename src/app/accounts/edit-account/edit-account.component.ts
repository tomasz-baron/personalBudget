
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  accountForm: FormGroup;
  currencies: string[] = [
    'PLN',
    'EUR'
  ];
  accountTypes: string[] = [
    'CURRENT',
    'SAVINGS',
    'CASH',
    'RETIREMENT'
  ]

  constructor(private dialogRef: MatDialogRef<EditAccountComponent>) { }

  ngOnInit() {
    this.initForm();
  }

  public save() {
    console.log(this.accountForm.value);
  }

  public cancel():void {
    this.dialogRef.close();
  }

  private initForm() {
    this.accountForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      number: new FormControl(''),
      bankName: new FormControl(''),
      currency: new FormControl('PLN', [Validators.required]),
      interestRate: new FormControl(),
      type: new FormControl('', [Validators.required]),
      initialBalance: new FormControl(0 , [Validators.required])
    })

  }

}
