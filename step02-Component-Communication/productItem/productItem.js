import { api, LightningElement } from 'lwc';

export default class ProductItem extends LightningElement {
    // @api productName;
    _productName; //getter setter를 속성으로 접근하는것 만으로도 get set메소드 실행된다
    //__변수명으로 따로 받아준다
    @api productPrice;

    @api set productName(value) {
        this._productName = value;
        // this.productName = value; --> 이러면 set 무한 호출
    }

    get productName(){
        return this._productName;
        // return this.productName;--> get 무한호출
    }

    handleClickAdd(){
        const message = this.productName + " 추가 성공!"; //getter실행
        let evt = new CustomEvent('add', {detail : message,
            bubbles : true,
        }); //customEvent 생성 .type, .detail 로 접근
        this.dispatchEvent(evt); //부모 태그로 전달
    }
}
