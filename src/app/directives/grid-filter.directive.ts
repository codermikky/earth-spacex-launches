import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[appGridFilter]"
})
export class GridFilterDirective {
  @Input() order: string;
  // @Input() filterName: string;
  constructor(public template: TemplateRef<any>) {}
}
