import { Directive, ElementRef, asNativeElements, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
    // this.elem.nativeElement.style.textDecoration='linethrough';
  }

  @HostListener("click") onClicks() {
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string) {
    this.elem.nativeElement.style.textDecoration=action;
  }

}
