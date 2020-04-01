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

  constructor(public dialog: MatDialog) {}

  openDialog(){
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: "hello fucking world!"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


}


