import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './auth/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cheesebook';
  user: string;

  constructor(public dialog: MatDialog) {}

  signUp(){
    const dialogRef = this.dialog.open(RegisterComponent, {
      panelClass: 'custom-dialog-container',
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
    });
  }


}


