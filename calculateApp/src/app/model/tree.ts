import {Branch} from "./branch";

export class Tree{
  name: string

  constructor(name: string) {
    this.name = name;
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

  public resetTree(branch: Branch): void{
    branch.value = 0
    branch.valueCalculated = false
    for (let br of branch.children){
      this.resetTree(br)
    }
  }
}
