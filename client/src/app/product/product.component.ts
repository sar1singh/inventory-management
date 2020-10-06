import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productForm: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['dashboard']); 
  }
}
