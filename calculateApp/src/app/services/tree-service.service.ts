import { Injectable } from '@angular/core';
import {Tree} from "../model/tree";
import {Branch} from "../model/branch";
import {DataSaveService} from "./data-save.service";

@Injectable({
  providedIn: 'root'
})
export class TreeServiceService {

  trees: Tree[]
  startingElem: Branch[]
  constructor(public dataSaveServ: DataSaveService) {
    this.trees = []

    try {
      this.startingElem = [dataSaveServ.getTreeFromLocal()]
    } catch (error) {
      this.startingElem = [dataSaveServ.jsonToTree(dataSaveServ.data)]
    }
  }

  public resetToStandardTree(): void{
    this.startingElem = [this.dataSaveServ.jsonToTree(this.dataSaveServ.data)]
  }

  public expandAbove(newParentName: string, newSisterName: string, newParentPos: boolean, newSisterPos: boolean): void{
    let nP = new Branch(newParentName, [], newParentPos)
    let nS = new Branch(newSisterName, [], newSisterPos)
    nP.children.push(this.startingElem[0], nS)
    this.startingElem = [nP]
  }
}
