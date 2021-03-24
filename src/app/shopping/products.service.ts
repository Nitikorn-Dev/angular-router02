import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Observable, of, from, BehaviorSubject } from "rxjs";
import { Product, product } from "../mock/product.mock";

@Injectable({ providedIn: "root" })
export class ProductsService {

  constructor() {
   this.Products2()
  }

  get Products(): Observable<Product[]> {
    return of(product);
  }



resolt:any;

   Products2(){

    this.resolt = this.local.subscribe(this.myObserver)

    console.log(this.resolt)
   }

myObserver = 
  {
   next:(res)=>{return res},
   error:(err)=>console.error(err),
   complete:()=>console.log('Complete')
  }

  



  local = new Observable((observer)=>{
    observer.next('A')
    observer.next('B')
    // observer.error(55)
    observer.next('C')
    observer.complete()
  })


  




}
