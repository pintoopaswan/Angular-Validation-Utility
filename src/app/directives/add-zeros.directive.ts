import {Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[addZeros]'
})
export class AddZerosDirective{
    constructor(private el:ElementRef){}

    @HostListener('focusout',['$event']) addZeros(event){
        if(this.el.nativeElement.value.indexOf('.')==-1){
            this.el.nativeElement.value=this.el.nativeElement.value +'.00';
        }else{
            let index=this.el.nativeElement.value.indexOf('.');
            let length=this.el.nativeElement.value.length;
            if((index+3)!=length){
                for (var _i = 0; (index+3)-length>_i; _i++) {
                    this.el.nativeElement.value=this.el.nativeElement.value +'0';
                }
            }
        }
        
    }
}