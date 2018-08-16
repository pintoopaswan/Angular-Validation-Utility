import { Directive, ElementRef,HostListener, SimpleChanges, Input, OnChanges } from '@angular/core';

@Directive({
    selector:'[formatAmount]'
})
export class FormatAmountDirective implements OnChanges{
    @Input() public formatAmount: any;

    constructor(private el:ElementRef){}

    @HostListener('keyup') onkeydown(){
        let formattedAmount=this.addComma(this.el.nativeElement.value);
        if(formattedAmount){
            this.el.nativeElement.value=formattedAmount;
        }
    }

    @HostListener('keypress') onkeyPress(){
        let formattedAmount=this.addComma(this.el.nativeElement.value);
        if(formattedAmount){
            this.el.nativeElement.value=formattedAmount;
        }
    }

    addComma(amout:any){
        let index=amout.indexOf(',');
        if(index!=-1){
            amout=amout.replace(/,/gi,'');
        }
    let length=amout.length;
    if(length>3 && length<12){
        var output1=amout.slice(0,length-3);
        let loopamount;
        if(output1.length>3){
            loopamount=this.addComma(output1);
        }
        var output2 = ','+amout.slice(-3);
        if(loopamount){
            amout=loopamount+output2;
        }else{
            amout=output1+output2;
        } 
    }else if(length>1 && length<4){
        let index=amout.indexOf(',');
        if(index!=-1){
            amout=amout.replace(/,/gi,'');
        }
    }
    return amout;

    }

    ngOnChanges(changes: SimpleChanges){
        if(changes.formatAmount){
            console.log(changes);
            let formattedAmount=this.addComma(this.el.nativeElement.value);
            if(formattedAmount){
                this.el.nativeElement.value=formattedAmount;
            }
        }
      }

}