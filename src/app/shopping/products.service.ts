import { Injectable } from "@angular/core";
import { Observable, of, from, BehaviorSubject } from "rxjs";
import { Product, product } from "../mock/product.mock";

@Injectable({ providedIn: "root" })
export class ProductsService {

  constructor() {
   
  }

  get Products(): Observable<Product[]> {
    return of(product);
  }

   Products2(){}

  local = new Observable((observer)=>{
    observer.next(1);
    observer.next(2);
  })


  




}
