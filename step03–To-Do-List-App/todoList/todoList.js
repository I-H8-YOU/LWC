import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {
    chk = false;
    cont = "";
    @track tArr = [];
    idx = 0;
    handleInput(event){
        this.cont = event.detail.value;
    }
    handleClick(){
        this.tArr.push({content:this.cont,
            idx:this.idx++,
        });
        this.chk = true;
    }
}
