
import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBlocksStyle]',
  host: {
    '(document: keyup)': 'initKeyUp($event)'
  },
  exportAs: 'blocksStyle'
})
export class BlocksStyleDirective implements OnInit, AfterViewInit, OnChanges {

  @Input() selector: string;
  @Input() initFirst: boolean = false;

  @Output() renderComplete = new EventEmitter();
  
  private items : HTMLElement[];
  private index: number = 0;
  public activeElementIndex: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    if(this.selector) {
      this.items = this.el.nativeElement.querySelectorAll(this.selector);
      if(this.initFirst) {
        if(this.items[0]){
          (this.items[0] as HTMLElement).setAttribute('style', 'border: 3px solid red');
        }
      }
      else {
        console.log('Не передан селектор')
      }

      setTimeout(() => {
        this.renderComplete.emit(true);
      })
    }
  }


  ngOnChanges(data: SimpleChanges): void {

  }

  
  initStyle(index: number) {
    if(this.items[index]) {
      (this.items[index] as HTMLElement).setAttribute('style', 'border: 3px solid red');
    }
  }

  
}
