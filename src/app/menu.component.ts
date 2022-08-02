import { Component, Input } from "@angular/core";

@Component({
  selector: "app-menu-component",
  templateUrl: "./menu.component.html"
})
export class MenuComponent {
  title = "CodeSandbox";
  @Input() items: string[];
}
