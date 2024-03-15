import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'User page'
    },
    {
      path: 'user-details/:name',
      component: UserDetailsComponent,
      title: 'User details'
    }
  ];
  
  export default routeConfig;