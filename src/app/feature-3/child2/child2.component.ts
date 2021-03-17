import { Component } from "@angular/core";

import { Child2Service } from "../child2.service";

@Component({
  selector: "app-child2",
  template: `
    <p>This is Child-2</p>
  `
})
export class Child2Component {
  text: string;
  constructor(private serviceChild2: Child2Service) {
    console.log(this.serviceChild2.text);
  }
}
