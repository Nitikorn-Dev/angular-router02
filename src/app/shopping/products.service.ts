import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Observable, of, from, BehaviorSubject, observable } from "rxjs";
import { Product, product } from "../mock/product.mock";

@Injectable({ providedIn: "root" })
export class ProductsService {
  constructor() {
    this.Products2();
  }

  get Products(): Observable<Product[]> {
    return of(product);
  }

  resolt: any;

  Products2() {}
}
