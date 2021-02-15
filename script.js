
function amountChange(classChange, isIncreas) {
    const inputNumber = document.getElementById(classChange +'-number');
    const countNumber = parseInt(inputNumber.value);
    let countTicketNumber = countNumber;
    if(isIncreas == true){
        countTicketNumber = countNumber +1;
    }
    if(isIncreas == false && countTicketNumber>0 ){
        countTicketNumber = countNumber -1;
    }
    inputNumber.value = countTicketNumber;
   
    let totalPrice = 0;
    if(classChange == 'first'){
        totalPrice = countTicketNumber*150;
    }
    if(classChange == 'economy'){
        totalPrice =countTicketNumber*100;
    }
    document.getElementById(classChange +'Price').innerText = totalPrice;
    calculate()}

//Calculate Ticket

function calculate(){
    
    const countFirst = getInputValue('first');
    const countEconomyTicket = getInputValue('economy');
    const subTotal = countFirst*150 + countEconomyTicket*100;
    document.getElementById('sub-total').innerText = subTotal;
    const tax = Math.round(subTotal*0.1);
    document.getElementById('tex-amount').innerText = tax;

    const total = subTotal+tax;
    document.getElementById('amount').innerText = total;
}
function getInputValue(classChange){
    const ClassCount = document.getElementById(classChange +'-number');
    const countClass = parseInt(ClassCount.value);
    return countClass;
}
//popup Function for book now button

function popupFunction() {
    alert("Congratulation! Your ticket has been submitted successfully!");
  }