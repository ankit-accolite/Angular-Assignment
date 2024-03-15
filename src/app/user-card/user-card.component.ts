import { Component, Input } from '@angular/core';
import { Userdata } from '../userdata';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() smpdata !: Userdata;
}
