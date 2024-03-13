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

    userdata_list: Userdata[] = [];
    userfetchServ : UserFetchService = inject(UserFetchService);
    //     {
    //       id: 101,
    //       name: 'Ankit',
    //       email: 'abc@gmail',
    //       city: 'Jaipur',
    //       phone: '11111111'
    //     },
    //     {
    //       id: 102,
    //       name: 'Rohan',
    //       email: 'xyz@gmail',
    //       city: 'Noida',
    //       phone: '2222222'
    //     },
    //     {
    //       id: 103,
    //       name: 'Sohan',
    //       email: 'nano@gmail',
    //       city: 'Udaipur',
    //       phone: '333333'
    //     }
    // ]
    constructor(){
        this.userdata_list=this.userfetchServ.getAllUserInfo();
    }
}
