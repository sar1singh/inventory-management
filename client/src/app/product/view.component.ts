import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  templateUrl: './view.component.html',
})
export class ProductViewComponent {
  id:any;
  productDetails:any;
  loading=false;
  constructor(private router: Router,private route: ActivatedRoute,private apiService: ApiService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.getProductDetails(this.id);
     });
  }

  getProductDetails(id) {
    this.loading = true;
      this.apiService.get('product/'+id).subscribe(res=>{
        if(res.status =='Success') {
            this.productDetails =res.data;
            this.loading= false;
        } else {
          alert(res.message)
          this.loading= false;
        }
      });
  }

}
