import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
},
{
    path: 'forget',
    loadChildren: './forget-password/forget-password.module#ForgetPasswordModule'
}
];

@NgModule({
imports: [RouterModule.forRoot(routes, {
    enableTracing: false
})],
exports: [RouterModule]
})
export class AppRoutingModule {}
