import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   @Input()
  product!: {
    name: string;
    discountPrice?: number;
    price: number;
    items_left: number;
    imageURL: string;
    is_in_inventory: boolean;
  };
}
