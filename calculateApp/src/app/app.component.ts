import { Component } from "@angular/core";
import { TreeServiceService } from "./services/tree-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  treeService = new TreeServiceService;
}
