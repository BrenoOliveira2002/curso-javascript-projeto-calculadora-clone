class CalcController {
    constructor() {
        this._displayCalc = "0";
        this.currentDate;
        this.initialize();
    }
    initialize(){
        
    } 
    get displayCalc(){
        return this._displayCalc;

    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    get currentDate(){
        return this.currentDate;

    }
    set dataAtual(valor){
        this._currentDate = valor;
    }
}