import { Component, OnInit, inject } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { Userdata } from '../userdata';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
        city: 'India',
        phone: '9999999999'
    };

      user_info: Userdata[] = [];

    httpclient =inject(HttpClient);

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData()
    {
      alert("Function Called");
      this.httpclient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        console.log(data);
        this.user_info = data;
      });
    }
}
