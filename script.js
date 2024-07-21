console.log("Hello")

var product_total_amt = document.getElementById('product_total_amt');
var shiping_charge = document.getElementById('shiping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');

const decrease = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    //console.log(itemval.value)

    if (itemval.value <= 0) {
        itemval.value = 0;
        alert('Negative quantity not allowed');
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shiping_charge.innerHTML);
    }
}

const increase = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    //console.log(itemval.value);

    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max 5 allowed');
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shiping_charge.innerHTML);
    }
}