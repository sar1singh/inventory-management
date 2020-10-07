import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private apiService: ApiService) { }
  products:any[] = [];
  loading=false;
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.loading = true;
    this.apiService.get('list').subscribe(res=>{
      if(res.status == 'Success') {
        this.products =res.data;
        this.loading = false;
      } else {
        alert(res.message);
      }
    });
  }

  addProduct(){
    this.router.navigate(['product/add']);
  }

  delete(id) {
    this.loading = true;
    this.apiService.del('product/'+id).subscribe(res=>{
      if(res.status =='Success') {
          alert(res.message);
          this.getList();
      } else {
        alert(res.message)
        this.loading= false;
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']); 
  }

}
