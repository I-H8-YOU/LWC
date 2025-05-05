import { LightningElement } from 'lwc';

export default class HelloName extends LightningElement {
  myInput = "";
  myFunc(e) {
    this.myInput = e.target.value;
  }
}
