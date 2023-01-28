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
      this.startingElem = [dataSaveServ.jsonToTree(dataSaveServ.data)]
    } catch (error) {
      this.startingElem = [dataSaveServ.getTreeFromLocal()]
    }
  }

  public resetToStandardTree(): void{
    this.startingElem = [this.dataSaveServ.jsonToTree(this.dataSaveServ.data)]
  }
}
