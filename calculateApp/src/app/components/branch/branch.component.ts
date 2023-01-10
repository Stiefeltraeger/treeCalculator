import {Component, Input, OnInit} from '@angular/core';
import {Branch} from "../../model/branch";
import {Tree} from "../../model/tree";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit{

  @Input() branch: Branch = new Branch('test', [], true);
  @Input() tree: Tree = new Tree('test', [])

  branch1Name!: string
  branch1pos: boolean = true
  branch2Name!: string
  branch2pos: boolean = true

  constructor(private modalService: NgbModal) {}

  value = 0;

  changeValue(): void{
    this.branch.value = this.value
    this.branch.valueCalculated = true
  }

  public addBranches(): void{
    if(this.branch1Name != null && this.branch2Name != null){
      let br1 = new Branch(this.branch1Name, [], this.branch1pos)
      let br2 = new Branch(this.branch2Name, [], this.branch2pos)
      this.branch.children.push(br1, br2)
      this.tree.branches.push(br1,br2)
    }
  }

  public addBranch(): void{
    if(this.branch1Name != null){
      let br1 = new Branch(this.branch1Name, [], this.branch1pos)
      this.branch.children.push(br1)
      this.tree.branches.push(br1)
    }
  }

  ngOnInit(): void {
  }

}
