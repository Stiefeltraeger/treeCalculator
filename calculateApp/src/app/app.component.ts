import { Component } from "@angular/core";
import { TreeServiceService } from "./services/tree-service.service";
import {DataSaveService} from "./services/data-save.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  saveService = new DataSaveService();
  treeService = new TreeServiceService(this.saveService);
  branch1Name!: string
  branch1pos: boolean = true
  branch2Name!: string
  branch2pos: boolean = true
}
