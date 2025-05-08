import { LightningElement, track } from 'lwc';

export default class ProductContainer extends LightningElement {
    chk = false;
    @track products = [
            {
                id: 1,
                price: 15000,
                name: 'Product1',
            },
            {
                id: 2,
                price: 25800,
                name: 'Product2',
            },
            {
                id: 3,
                price: 5000,
                name: 'Product3',
            }
        ]
        msg = "";
        handleAdd(e){
            this.msg = e.detail;
            this.chk = true;
        }
}
