import {Routes,RouterModule} from '@angular/router';
import {CustomComponent} from './custom/custom.component';
import {WelcomeComponent} from './welcome/welcome.component'


const routes:Routes = [

    {
        path:'welcome',
        component:WelcomeComponent
    },
    {
        path:'component',
        component:CustomComponent
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    }

];

export const routing = RouterModule.forRoot(routes);