class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }
    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        dateEl.innerHTML = "04/05/2022";
        timeEl.innerHTML = "10:23"
        displayCalcEl.innerHTML = "4567"


    } 
    get displayCalc(){
        return this._displayCalc;

    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    get currentDate(){
        return this._currentDate;

    }
    set currentDate(hora){
        this._currentDate = hora;
    }
}