class CalcController {
    constructor() {
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
 
     initButtonsEvents(){       

   let buttons = document.querySelectorAll("#buttons >g, #parts >g");

     buttons.forEach((btn, index)=> {

         btn.addEventListener('click', e => {
             console.log(btn.className.baseVal.replace("btn-", ""));
         });
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