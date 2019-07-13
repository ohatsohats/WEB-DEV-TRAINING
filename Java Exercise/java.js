//WRONG INPUTS

function empty(){
    alert('Error! No Input')
}
// INPUTS
let product = "";
let price = 0;
let quantity = 0;
let inputCash = 0;
let total = 0;
let change = 0;

function getProduct(){
    product = document.getElementById('product').value;
}

function getPrice() {
    price = document.getElementById('price').value;
}


function getQuantity() {
    quantity = document.getElementById('quantity').value;
}

function getCash() {
    inputCash = document.getElementById('inputCash').value;
}

function getTotal() {
    getPrice();
    getQuantity();
    getProduct();
    
    if(price == "" || quantity == "" || product == ""){
        empty();
    }
    else{
        total = price * quantity;
        document.getElementById("total").innerText = total;
    }
   
    return false;
}

function save() {
    getCash();
    if (inputCash < total) {
        alert('Insufficient Funds!');
    }
    else if(inputCash == ""){
        empty();
    }
    else{
        change = inputCash - total;
        document.getElementById("inPrd").innerHTML = product;
        document.getElementById("inPrice").innerHTML = price;
        document.getElementById("inQuantity").innerHTML = quantity;
        document.getElementById("inTotal").innerHTML = total;
        document.getElementById("inCash").innerHTML = inputCash;
        document.getElementById("inChange").innerHTML = change;
    }

}

