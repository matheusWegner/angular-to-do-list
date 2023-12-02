import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class ConfirmDialog {
    // dialogActions: string;
    public readonly ACTION_YES: string = "SIM";
    public readonly ACTION_NO: string = "NÂO";
    public readonly ACTION_CANCEL: string = "CANCELADO";
    public readonly ACTION_IGNORE: string = "IGNORADO";
    public readonly ACTION_OK: string = "OK";
    public readonly ACTION_CLOSE: string = "FECHAR";
    public readonly ACTION_CONFIRM: string = "CONFIRMAR";
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
                public dialogRef: MatDialogRef<ConfirmDialog>, 
                library: FaIconLibrary,
                private dialog: MatDialog) {
        library.addIcons(
			faTriangleExclamation,
            faXmark
	  	);

    }

    closeDialog(){
        this.dialogRef.close();
    }

    
}
