import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[appCardTmp]"
})
export class CardTmpDirective {
  constructor(public template: TemplateRef<any>) {}
}
