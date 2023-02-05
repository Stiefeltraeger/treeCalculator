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

  public resetTree(branch: Branch): void{
    branch.value = 0
    branch.valueCalculated = false
    for (let br of branch.children){
      this.resetTree(br)
    }
  }

  calculateValuesForAllBellow(branch: Branch): void{
    if (true) {
      if (branch.children.length === 0){
        throw new Error('Cant calculate the branch because children are undefined')
      }
      let calculatedValues = []

      // then a recursion to get all the uncalculated values
      for (let uc of branch.children.filter((child) => !child.valueCalculated && child.usedInCalculation)){
        this.calculateValuesForAllBellow(uc)
        calculatedValues.push(uc.value)
      }

      //first all values that are calculated
      for (let v of branch.children.filter((child) => child.valueCalculated && child.usedInCalculation)){
        let value = v.value
        if (!v.positive){
          value = 6 - value
        }
        calculatedValues.push(value)
      }



      if (branch.logic === 'AND'){calculatedValues.sort((a,b) => {
        if (a > b) return 1
        if (a < b) return -1
        else return 0
      })
        console.log(branch.name + calculatedValues)

        branch.value = calculatedValues[0]
        branch.valueCalculated = true;

      }
      else if (branch.logic === 'OR'){calculatedValues.sort((a,b) => {
        if (a > b) return -1
        if (a < b) return 1
        else return 0
      })
        console.log(branch.name + calculatedValues)
        branch.value = calculatedValues[0]
        branch.valueCalculated = true;

      }

      else if (branch.name === 'Angriffsabsicht'){
        let nerf = 0
        if(branch.children[0].value === 1){
          nerf = 2
        }
        else if (branch.children[0].value === 1){
          nerf = 1
        }
        branch.value = branch.children[1].value - nerf
        branch.valueCalculated = true
      }
    }
  }

}
