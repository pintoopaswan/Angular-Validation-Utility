import {Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[addZeros]'
})
export class AddZerosDirective{
    constructor(private el:ElementRef){}

    @HostListener('focusout',['$event'])
    addZerosAfterFocusOut(event){
        console.log(event);
        console.log(this.el.nativeElement.maxlegth);
        this.el.nativeElement.value=this.el.nativeElement.value+.00;
    }
}