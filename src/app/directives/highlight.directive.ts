import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.cursor') pointerValue = 'none';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter')
  onMouseEnter(event: Event) {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
    this.pointerValue = 'pointer';
  }

  @HostListener('mouseleave')
  onMouseLeave(event: Event) {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
    this.pointerValue = 'none';
  }
}
