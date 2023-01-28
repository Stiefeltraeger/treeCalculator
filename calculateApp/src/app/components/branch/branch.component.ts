import {Component, Input, OnInit} from '@angular/core';
import {Branch} from "../../model/branch";
import {Tree} from "../../model/tree";
import {TreeServiceService} from "../../services/tree-service.service";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit{

  @Input() branch: Branch = new Branch('test', [], true);
  @Input() tree: Tree = new Tree('test')

  branch1Name!: string
  branch1pos: boolean = true
  branch2Name!: string
  branch2pos: boolean = true

  constructor(public treeService: TreeServiceService) {}

  value = 1;

  changeValue(): void{
    if (this.value > 0 && this.value < 6) {
      this.branch.value = this.value
      this.branch.valueCalculated = true
    }
  }

  public addBranches(): void{
    if(this.branch1Name != null && this.branch2Name != null){
      let br1 = new Branch(this.branch1Name, [], this.branch1pos)
      let br2 = new Branch(this.branch2Name, [], this.branch2pos)
      this.branch.children.push(br1, br2)
    }
  }

  public addBranch(): void{
    if(this.branch1Name != null){
      let br1 = new Branch(this.branch1Name, [], this.branch1pos)
      this.branch.children.push(br1)
    }
  }

  ngOnInit(): void {
  }

  deleteBranch(branch: Branch) :void{
    branch.toDelete = true
  }
}
