import {Injectable} from '@angular/core';
import data from "./data.json"

import {Branch} from "../model/branch";

@Injectable({
  providedIn: 'root'
})


export class DataSaveService {

  constructor() {}

  filePath: string = 'data.json'
  data: string = data

  public treeToString(node: Branch): any{
    if(!node.toDelete) {
      let jsonString =
        `
      {"name": ${JSON.stringify(node.name)},
      "positive" : ${JSON.stringify(node.positive)},
      "logic" : ${JSON.stringify(node.logic)}
    `;
      jsonString += `,"children":[`;
      node.children.forEach((child, index) => {
        if (!child.toDelete) {
          jsonString += this.treeToString(child);
          if (index !== node.children.length - 1) {
            jsonString += ',';
          }
        }
      }
      )

      jsonString += ']}';
      return jsonString;
    }
  }

  public jsonToTree(json: any): Branch {
    let tree: Branch = new Branch(json.name, [], json.children)
    tree.logic = json.logic
    tree.positive = json.positive
    let children = json.children
    for (let child of children) {
      tree.children.push(this.jsonToTree(child));
    }

    return tree;
  }

  public getTreeFromLocal(): Branch{
    // @ts-ignore
    return this.jsonToTree(JSON.parse(localStorage.getItem("savedTree")))
  }

  public storeTreeInLocal(branch: Branch): void{
    const json = this.treeToString(branch)
    localStorage.setItem("savedTree", json);
  }


  public test(): void{

  }

}
