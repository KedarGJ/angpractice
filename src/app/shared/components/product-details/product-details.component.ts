import { Component, OnInit } from '@angular/core';
import { Iprod } from '../../models/prod';
import { ProductsService } from '../../services/products.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit  {
Id!:string;
prodObj!:Iprod;

constructor(
  private _prodService:ProductsService,private _http:HttpClient,private _route:ActivatedRoute
){}
  quantity = 1;

  // product = {
  //   title: 'Elite Gourmet EKT1001B Electric BPA-Free Glass Kettle',
  //   category: 'Consumer Electronics',
  //   discountPrice: 18.99,
  //   originalPrice: 20.99,
  //   brand: 'Elite Gourmet',
  //   capacity: '1 Liters',
  //   material: 'Glass',
  //   wattage: '1100 watts',
  //   colors: ['Graphite Black', 'White', 'Blue'],
  //   mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZfFktcjRsVpkF_SVjyvOTzaDpRzOFlTRiw&s',
  //   thumbnails: [
  //     'https://via.placeholder.com/400x300',
  //     'https://via.placeholder.com/400x300?text=Side',
  //     'https://via.placeholder.com/400x300?text=Back',
  //     'https://via.placeholder.com/400x300?text=Box'
  //   ],
  //   descriptionPoints: [
  //     "Here's the quickest way to enjoy hot tea.",
  //     "100% BPA-free premium glass.",
  //     "No messy spills or accidents.",
  //     "Convenient capacity markings.",
  //     "1 year limited warranty."
  //   ]
  // };

 ngOnInit(): void {
   this.Id=this._route.snapshot.params['id'];
   this._prodService.getSingleProduct(this.Id).subscribe(res=>{
    this.prodObj=res
   })
 }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

}
