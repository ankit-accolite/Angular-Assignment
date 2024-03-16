import { Component, OnInit, inject } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { Userdata } from '../userdata';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserFetchService } from '../user-fetch.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,UserCardComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    sample_user: Userdata ={
        id: 101,
        name: 'Test Name',
        email: 'Test Email',
        phone: '9999999999',
        username: 'NA',
        website: '.com'
    };

    user_info: Userdata[] = []; 
    filteruser_info : Userdata[] = [];

    httpclient =inject(HttpClient);
    uds = inject(UserFetchService);

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData()
    {
      this.httpclient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.user_info = data;
        this.uds.addtoMyArray(this.user_info);
      });
    }
  }