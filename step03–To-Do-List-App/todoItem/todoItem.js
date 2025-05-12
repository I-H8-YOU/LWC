import { LightningElement, api } from 'lwc';

export default class ToDoItem extends LightningElement {
    _content;
    @api 
    get content(){
        return this._content
    }

    set content(value){
        this._content = value;
    }
}
