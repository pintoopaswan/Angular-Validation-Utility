import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  exForm:FormGroup;
  isDisabled:boolean;
  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.setExForm(undefined);
  }

  setExForm(value:any){
    if(value==undefined){
      this.exForm=this.fb.group({
        amount:[''],
        total:['1111111'],
        phone:['1234567890']
      })

    }else{
      this.exForm=this.fb.group({
        amount:[value],
        total:[''],
        phone:['']
      })
    }

  }

  //disable automatically whenever value equals to 123
  // ngDoCheck(){
  //   console.log('do check');
  //   if(this.exForm.get('amount').value==123){
  //     this.exForm.get('amount').disable();
  //   }
    
  // }
}
