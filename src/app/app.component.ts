import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app-kva-fitness';

  profileOpened: boolean = false;

  constructor (public userService: UserService, public dialog: MatDialog) {}

  openProfile(userId: number) {
    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: '50vw',
      data: {user: this.userService.getUserById(userId)}
    });

    profileDialog.afterClosed().subscribe((r) => {
      this.profileOpened = false;
    })
  }


}
