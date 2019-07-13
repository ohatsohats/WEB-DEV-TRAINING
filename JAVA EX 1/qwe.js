/*let product = {
  
    productName : 'stick O',
    
    productPrice : 2,

    productQuantity : 1

}
*/


function product() {
    return document.getElementById('prdct').value;
}

function price() {
    return document.getElementById('price').value;
}

function quantity() { 
    return document.getElementById('quantity').value;
}

function cash() {
    return document.getElementById('cash').value;
}




// Get Total
function qoutation() {
    document.getElementById('total').innerHTML =" Total is " + (quantity() * price())
}

