import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Product, product } from "../mock/product.mock";

@Injectable({ providedIn: "root" })
export class ProductsService {
  constructor() {
    // console.log(product)
  }

  Products(): Observable<Product[]> {
    return of(product);
  }
}
