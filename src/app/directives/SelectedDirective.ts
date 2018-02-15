import {Directive, OnInit, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[SelectElement]'
})
export class SelectedDirective implements OnInit {
  isClicked: boolean = true;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {

  }

  @HostListener('click') onElemClick() {
    console.log(this.isClicked);
    if (this.isClicked) {
      this.elementRef.nativeElement.style.borderLeft = '3px solid #2b2bc4';
      this.elementRef.nativeElement.style.background = 'lavender';
    }
    else {
      this.elementRef.nativeElement.style.borderLeft = 'none';
      this.elementRef.nativeElement.style.background = 'none';
    }
    this.isClicked = !this.isClicked;
  }
}
