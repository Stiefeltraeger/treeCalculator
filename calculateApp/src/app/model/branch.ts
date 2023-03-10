export class Branch {

  name: string
  children: Branch[]
  positive: boolean
  logic: string
  value: number;
  valueCalculated: boolean
  level: number
  usedInCalculation: boolean = true
  toDelete: boolean = false
  constructor(name: string, children: Branch[], positive: boolean) {
    this.name = name
    this.children = children
    this.positive = positive
    this.value = 0
    this.valueCalculated = false
    this.logic = 'null'
    this.level = 1
  }
}
