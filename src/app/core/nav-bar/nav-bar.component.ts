import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { ILoginUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUser$: Observable<ILoginUser>;

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout(){
    this.accountService.logOut();
  }
}
