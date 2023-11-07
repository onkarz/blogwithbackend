import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blogger';

  userData: any;
  loggedInUserName: any;

  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
  ) {}
    
  ngOnInit() {
    this.localStorageService.getData().subscribe((data) => {
      this.userData = JSON.parse(data);
      console.log(this.userData);
      if(this.userData){
        this.loggedInUserName = this.userData.user.firstname;
      }

    });
  }

  logOut() {
    this.localStorageService.removeData();
    this.router.navigate(['/login']);
  }
}
