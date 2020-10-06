import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  products = [
    {name: 'Trouser', id: 1,productId:'ABC-123',type:'Apparel',storeName:'Raymond'},
    {name: 'Shirt', id: 2,productId:'ABC-124',type:'Apparel',storeName:'Raymond'},
    {name: 'Milk', id: 3,productId:'BCE-124',type:'Food',storeName:'Vita'},
  ];
  ngOnInit(): void {
    console.log(this.products);
  }

  addProduct(){
    this.router.navigate(['product/add']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']); 
  }

}
