import {Branch} from "./branch";

export class Tree{
  branches: Branch[]
  name: string

  constructor(name: string, branches: Branch[]) {
    this.name = name;
    this.branches = branches
  }

  calculateValuesForAllBellow(branch: Branch): void{
    if (true) {
      if (branch.children.length === 0){
        throw new Error('Cant calculate the branch because children are undefined')
      }
      let calculatedValues = []
      //first all values that are calculated
      for (let v of branch.children.filter((child) => child.valueCalculated)){
        let value = v.value
        if (!v.positive){
          value = 6 - value
        }
        calculatedValues.push(value)
      }
      // then a recursion to get all the uncalculated values
      for (let uc of branch.children.filter((child) => !child.valueCalculated)){
        this.calculateValuesForAllBellow(uc)
        calculatedValues.push(uc.value)
      }

      if (branch.logic === 'AND'){calculatedValues.sort((a,b) => {
        if (a > b) return 1
        if (a < b) return -1
        else return 0
      })}
      if (branch.logic === 'OR'){calculatedValues.sort((a,b) => {
        if (a > b) return -1
        if (a < b) return 1
        else return 0
      })}
      branch.value = calculatedValues[0]
      branch.valueCalculated = true;
    }
  }

  public getDept(): number[]{
    let dept = 1
    for(let branch of this.branches){
      if (branch.level > dept){
        dept = branch.level
      }
    }

    let ret = []

    for (let i = 1; i <= dept; i = i + 1){
      ret.push(i)
    }
    console.log(ret)
    return ret
  }

  public getLevelBranches(level: number): Branch[]{
    const ret = this.branches.filter((br) => br.level === level)
    return ret
  }

  public resetTree(): void{
    for (let br of this.branches){
      br.valueCalculated = false
      br.value = 0
    }
  }
}
