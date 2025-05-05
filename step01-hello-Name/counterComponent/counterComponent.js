import { LightningElement } from 'lwc';

export default class CounterComponent extends LightningElement {
  varCnt = 0;
  handleClickPlus(){
    this.varCnt++;
  }

  handleClickSub(){
    if(this.varCnt > 0){
      this.varCnt--;
    }else{
      this.varCnt = 0;
    }
  }
  
  handleClickReset(){
    this.varCnt = 0;
  }
}
