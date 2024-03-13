import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    sample_user: Userdata ={
        id: 101,
        name: 'Test Name',
        email: 'Test Email',
        city: 'India',
        phone: '9999999999'
    };
}
