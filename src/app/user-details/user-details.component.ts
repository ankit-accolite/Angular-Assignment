import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserFetchService } from '../user-fetch.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  username = 'NA';
  constructor()
  {
    this.username = String(this.route.snapshot.params['name']);
  }
}
