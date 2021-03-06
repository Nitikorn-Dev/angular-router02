import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "../../mock/product.mock";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.Products.pipe(
      map(res => {
        return res;
      })
    );
  }

  ngOnInit() {}

  



}
