import { Component, OnInit } from '@angular/core';
import { Iprod } from '../../models/prod';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit
 { 
 prodArr!: Iprod[];
 constructor(
  private prodService:ProductsService,
  private _router:Router
 ){}
 ngOnInit(): void {
   this.prodService.getallProducts().subscribe(res=>this.prodArr=res)
   console.log(this.prodArr)
 }

 gotoDetails(product:any){
  this._router.navigate(['/product',product._id])
 }

}
