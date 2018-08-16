import { Directive, ElementRef, HostListener, Input,SimpleChanges,OnChanges } from '@angular/core';

@Directive({
    selector: '[formatPhoneNumber]'
})
export class FormatPhoneNumberDirective implements OnChanges {
    @Input('formatPhoneNumber')formatPhoneNumber:any;
    keyCode:any;
    constructor(private el: ElementRef) { }


    @HostListener('keypress', ['$event']) onKeyUp(event: KeyboardEvent) {
        this.keyCode=event.keyCode;
        if (event.keyCode !== 8) {
            if (this.el.nativeElement.value.length == 3 || this.el.nativeElement.value.length == 7) {
                this.el.nativeElement.value += '-';
            }
        }
    }

    ngOnChanges(changes:SimpleChanges){
        if(changes.formatPhoneNumber){
          this.el.nativeElement.value=this.el.nativeElement.value.slice(0,3)+'-'+this.el.nativeElement.value.slice(3,6)+'-'+this.el.nativeElement.value.slice(6);
        }
    }



}