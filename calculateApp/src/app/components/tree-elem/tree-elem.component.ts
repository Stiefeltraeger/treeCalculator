import {Component, Input} from '@angular/core';
import {Branch} from "../../model/branch";

@Component({
  selector: 'app-tree-elem',
  templateUrl: './tree-elem.component.html',
  styleUrls: ['./tree-elem.component.scss']
})
export class TreeElemComponent {

  @Input() children: Branch[] = []
}
