import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './add.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module'

@NgModule({
  declarations: [ProductComponent,ProductAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ProductRoutingModule
  ],
  entryComponents: [ProductComponent]
})
export class ProductModule { }
