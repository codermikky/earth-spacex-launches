import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList
} from "@angular/core";
import { CardTmpDirective } from "../directives/card-tmp.directive";
import { GridFilterDirective } from "../directives/grid-filter.directive";

// class GridState {
//   filter: string;
//   value: any;
//   constructor(filter, value) {
//     this.filter = filter;
//     this.value = value;
//   }
// }

@Component({
  selector: "app-data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.css"]
})
export class DataGridComponent implements OnInit, AfterContentInit {
  @Input() data: any[] = [];
  // @Output() refresh = new EventEmitter<any>();
  @ContentChild(CardTmpDirective) gridItem: CardTmpDirective;
  @ContentChildren(GridFilterDirective) filters: QueryList<GridFilterDirective>;
  constructor() {}
  ngOnInit() {}
  ngAfterContentInit() {}
  public getFiltersList() {
    return this.filters.map(item => item);
  }
  // appliedFilter(e: Event, filter) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const val = (e.target as any).value;
  //   debugger;
  //   console.log("grid", val);
  //   if (
  //     val == null ||
  //     val == undefined ||
  //     filter == null ||
  //     filter == undefined
  //   ) {
  //     return;
  //   }
  //   this.refresh.emit(new GridState(filter, val));
  // }
}
