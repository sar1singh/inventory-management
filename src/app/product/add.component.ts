import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  templateUrl: './add.component.html',
})
export class ProductAddComponent {
  productForm: any;
  constructor(private fb: FormBuilder,private router: Router) { 
  }

  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.fb.group({
      name:['', Validators.required],
      productId: ['', Validators.required],
      type: ['', Validators.required],
      storeName: ['', Validators.required]
    });
  }

  saveProduct() {
    console.log(this.productForm);
    this.router.navigate(['dashboard']);
  }

}
