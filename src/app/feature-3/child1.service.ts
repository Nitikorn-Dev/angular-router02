import { Injectable } from "@angular/core";
console.log("buil Child-1 Service1");


@Injectable({ providedIn: "root" })

export class Child1Service {
  service1: string = "this is Service1";
  constructor() {}
}
