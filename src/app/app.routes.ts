import {Routes,RouterModule} from '@angular/router';
import {CustomComponent} from './custom/custom.component';
import {WelcomeComponent} from './welcome/welcome.component'
import {DirComponent} from './dir/dir.component'
import {HostlistenerComponent} from './hostlistener/hostlistener.component'
import {NgtemplateComponent} from './ngtemplate/ngtemplate.component'


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
        path:'directive',
        component:DirComponent
    },
    {
        path:'hostlistener',
        component:HostlistenerComponent
    },
    {
        path:'ngtemplate',
        component:NgtemplateComponent
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    }

];

export const routing = RouterModule.forRoot(routes);