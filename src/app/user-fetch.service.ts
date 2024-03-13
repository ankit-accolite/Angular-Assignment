import { Injectable } from '@angular/core';
import { Userdata } from './userdata';
@Injectable({
  providedIn: 'root'
})
export class UserFetchService {
  constructor() { }

  userdata_list: Userdata[] = [
    {
      id: 101,
      name: 'Ankit',
      email: 'abc@gmail',
      city: 'Jaipur',
      phone: '11111111'
    },
    {
      id: 102,
      name: 'Rohan',
      email: 'xyz@gmail',
      city: 'Noida',
      phone: '2222222'
    },
    {
      id: 103,
      name: 'Sohan',
      email: 'nano@gmail',
      city: 'Udaipur',
      phone: '333333'
    }
]
  getAllUserInfo() : Userdata[]
  {
    return this.userdata_list;
  }

  getUserInfoByName(name: string) : Userdata | undefined
  {
    return this.userdata_list.find(UserData => UserData.name==name);
  }
}
