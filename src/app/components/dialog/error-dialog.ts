import {Component, Inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'error-dialog',
  templateUrl: 'error-dialog.html',
  standalone: true,
})
export class ErrorDialog {
  constructor(public dialogRef: MatDialogRef<ErrorDialog>,
             @Inject(MAT_DIALOG_DATA) public data: any) {}
}