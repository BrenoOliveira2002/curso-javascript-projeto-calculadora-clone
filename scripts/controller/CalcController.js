class CalcController {
    constructor() {

        this.lastOperator = '';
        this.lastNumber = '';
        this._operation = [];
        this.locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }
    //arrow function para ficar recarregando o horário de 1 em 1 sec
    initialize(){  
        setInterval(()=>{
        this.setDisplayTime();
        },1000);  
        this.setLastNumberToDisplay();

     }

    addEventListenerAll(element, events, fn,) {

    events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);   

        });

    }

    clearAll(){ 

        this._operation = [];
        this.lastNumber = '';
        this.lastOperator = '';
        this.setLastNumberToDisplay();
    }
    
    clearEntry() {

        this._operation.pop();
        this.setLastNumberToDisplay();

    }

    getLastOperation() {

       return this._operation[this._operation.length-1];

    }

    setLastOperation(value){

        this._operation[this._operation.length - 1] = value;

    }

    isOperator(value) {

     return (['+', '-', '*', '/', '%', '.' ].indexOf(value) > -1)


    }

    pushOperation(value) {

        this._operation.push(value);
        if (this._operation.length > 3) {

            this.calc();
        }

    }

    getResult(){ 

        console.log("getresult", this._operation);
        return eval(this._operation.join(""));

    }
    
    calc(){ 

        let last = '';

        this.lastOperator = this.getLastItem();

        if (this._operation.length < 3) {

            let firstItem = this._operation[0];
            this._operation = [firstItem, this.lastOperator, this.lastNumber];
        }

        
        if (this._operation.length > 3) {
             last = this._operation.pop();

        this.lastNumber = this.getResult();
        }
        
        else if (this._operation.length == 3) {

            this.lastNumber = this.getLastItem(false);

        }

        let result = this.getResult();
        if (last == '%') {

            result /= 100;

            this._operation = [result];
        }
        else {

        this._operation = [result,];

        if (last) this._operation.push(last);
        }
        this.setLastNumberToDisplay();
    }

    getLastItem(isOperator = true) {

        let lastItem;

        for (let i = this._operation.length-1; i >= 0; i-- ) {

            if (this.isOperator(this._operation[i]) == isOperator){ 
                lastItem = this._operation[i];
                break;
            }
     }
        if (!lastItem) {

             lastItem = (isOperator) ? this.lastOperator : this.lastNumber      }
        return lastItem;

    }

    setLastNumberToDisplay(){

        let lastNumber = this.getLastItem(false);

        if(!lastNumber) lastNumber = 0;
        this.displayCalc = lastNumber;
 }
    addOperation(value) {

        if (isNaN(this.getLastOperation())){
            // string here
            if (this.isOperator(value)) {
                // operator change
                this.setLastOperation(value);
            }

            else {  

                this.pushOperation(value);
                this.setLastNumberToDisplay();

            }

        } else {
            
            if (this.isOperator(value)) { 

                this.pushOperation(value);

            }

            else {
            //number here
            let newValue = this.getLastOperation().toString() + value.toString();

            this.setLastOperation(newValue);

            this.setLastNumberToDisplay();

        }
     }

      

    }


    setError() {

        this.displayCalc = "Error";

    }
    
    addDot() {

     let lastOperation =  this.getLastOperation();

     if (typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1) return;
    
     if (this.isOperator(lastOperation)|| !lastOperation ) {

        this.pushOperation('0.') 
     }
     else {
         this.setLastOperation(lastOperation.toString() + '.');

     }
     this.setLastNumberToDisplay();
    }

    execBtn(value) {

    switch (value) {

        case 'ac':

            this.clearAll();

        break;

        case 'ce':
            
            this.clearEntry();

        break;

        case 'soma':
            
            this.addOperation('+');

        break;

        case 'subtracao':
            
            this.addOperation('-');

        break;

        case 'divisao':
            
            this.addOperation('/');

        break;

        case 'multiplicacao':
            
            this.addOperation('*');

        break;

        case 'igual':
            
            this.calc();

        break;
        
        case 'porcento':
            
            this.addOperation('%');

        break;

        case 'ponto':
             this.addDot('.');

        break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':

            this.addOperation(value);

        break;

        default:

             this.setError();

        break;


    }
 }
 
     initButtonsEvents(){       

   let buttons = document.querySelectorAll("#buttons >g, #parts >g");

     buttons.forEach((btn, index)=> {

         this.addEventListenerAll(btn,'click drag ', e => {

            let textBtn = btn.className.baseVal.replace("btn-", "");

            this.execBtn(textBtn);

         });
         
         this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

            btn.style.cursor = "pointer";
         })
     })
     
}

//funcao para puxar a data e hora
setDisplayTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
        month: "long",
        day:    "2-digit",
        year: "2-digit"
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this.locale);


}

    get displayTime(){
        return this._timeEl.innerHTML;

    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;

    }
    get displayDate(){
        return this._dateEl.innerHTML;

    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
        } 

        get displayCalc(){
        return this._displayCalcEl.innerHTML;

    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
    get currentDate(){
        return new Date();
    

    }
    set currentDate(hora){
        this._currentDate = hora;
    }
 }