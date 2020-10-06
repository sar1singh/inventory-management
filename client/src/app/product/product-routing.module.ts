import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './add.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: '', component:ProductComponent,children:[
        { path: 'add',pathMatch: 'full', component:ProductAddComponent},
        { path: '', redirectTo: 'add', pathMatch: 'full'},
        { path: '**', redirectTo:'add',pathMatch: 'full'}
    ]},
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
