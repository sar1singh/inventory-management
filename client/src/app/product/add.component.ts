import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  templateUrl: './add.component.html',
})
export class ProductAddComponent {
  productForm: any;
  constructor(private fb: FormBuilder,private router: Router,private apiService: ApiService) { 
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

    let payload = {data:{
      "name": this.productForm.get('name').value,
      "productId": this.productForm.get('productId').value,
      "type": this.productForm.get('type').value,
      "storeName": this.productForm.get('storeName').value,
      "createdBy": localStorage.getItem('username'),
    }};
      this.apiService.post('product/add',payload).subscribe(res=>{
        if(res.status =='Success') {
          localStorage.setItem('token',res.token)
          this.router.navigate(['dashboard']); 
        } else {
          alert(res.message)
        }
      });
    
  }

}
