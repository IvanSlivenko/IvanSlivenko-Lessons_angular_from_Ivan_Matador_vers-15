import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ReturnedData } from '../../interfaces/returned-data';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})


export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  usersList$!: Observable<User[]>;

  constructor(
    private userService: UsersService  
  ) {

  }

  ngOnInit(){
    this.usersList$ =this.userService.initUsers()
  }


}
