import { Injectable } from '@angular/core';
import { Userdata } from './userdata';
@Injectable({
  providedIn: 'root'
})
export class UserFetchService {
  constructor() { }
  userdata_list: Userdata[] = [];

  addtoMyArray(arr: Userdata[])
  {
    this.userdata_list = arr;
  }

  getAllUserInfo() : Userdata[]
  {
    return this.userdata_list;
  }

  getUserInfoByName(name: string) : Userdata | undefined
  {
    return this.userdata_list.find(Ud => Ud.name==name);
  }
}
