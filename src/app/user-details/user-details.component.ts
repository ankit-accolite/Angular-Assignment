import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserFetchService } from '../user-fetch.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userdetailsfetchservice = inject(UserFetchService);
  userbriefdata: Userdata | undefined;

  constructor()
  {
    const username = String(this.route.snapshot.params['name']);
    alert("Welcome : "+username);
    this.userbriefdata = this.userdetailsfetchservice.getUserInfoByName(username);
  }
}
