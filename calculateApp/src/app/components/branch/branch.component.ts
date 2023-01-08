import {Component, Input, OnInit} from '@angular/core';
import {Branch} from "../../model/branch";
import {Tree} from "../../model/tree";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit{

  @Input() branch: Branch = new Branch('test', [], true);
  @Input() tree: Tree = new Tree('test', [])


  value = 0;

  changeValue(): void{
    this.branch.value = this.value
    this.branch.valueCalculated = true
  }

  ngOnInit(): void {
  }

}
