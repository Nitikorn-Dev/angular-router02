import { Injectable } from "@angular/core";
console.log("buil Child-2 Service2");
@Injectable({ providedIn: "root" })
export class Child2Service {
  text: string = "Call Service2";
  constructor() {}
}
