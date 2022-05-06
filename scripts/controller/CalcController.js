class CalcController {
    constructor() {
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

        setInterval(()=>{
        this.setDisplayTime();
        },1000);  

        })
     }

    addEventListenerAll(element, events, fn,) {

    events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);   

        });

    }

    clearAll(){ 

        this._operation = [];
    }
    
    clearEntry() {

        this._operation.pop();

    }

    addOperation(value) {

        this._operation.push(value);

        console.log(this._operation);

    }


    setError() {

        this.displayCalc = "Error";

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
            
            this.clearEntry();

        break;

        case 'subtracao':
            
            this.clearEntry();

        break;

        case 'divisao':
            
            this.clearEntry();

        break;

        case 'multiplicacao':
            
            this.clearEntry();

        break;

        case 'igual':
            
            this.clearEntry();

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

            this.addOperation(parseInt(value));

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