import { Component } from "@angular/core";
import { Shared2Service } from "../../shared2.service";

@Component({
  selector: "app-child1",
  template: `
    <p>This is Child-1</p>
  `
})
export class Child1Component {
  constructor(private service2: Shared2Service) {}
}
