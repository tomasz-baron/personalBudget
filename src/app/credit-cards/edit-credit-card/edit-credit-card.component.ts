import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-credit-card',
  templateUrl: './edit-credit-card.component.html',
  styleUrls: ['./edit-credit-card.component.scss']
})
export class EditCreditCardComponent implements OnInit {
  creditCardForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<EditCreditCardComponent>) { }

  ngOnInit() {
    this.initForm();
  }

  public save() {
    console.log(this.creditCardForm.value);
  }

  public cancel():void {
    this.dialogRef.close();
  }

  private initForm() {
    this.creditCardForm = new FormGroup({
      number: new FormControl('', [Validators.required]),
      limit: new FormControl(0, [Validators.required]),
      cycle: new FormControl('', [Validators.required]),
      initialFunds: new FormControl(0, [Validators.required])
    });
  }

}
