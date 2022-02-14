function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = Number(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = Number(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();

}
//calculation total cost
function getInputValue(product) {
    const Input = document.getElementById(product + '-number');
    const productNumber = Number(Input.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    //update total cost in html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}
//handle case for phone
//increasing phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
//decreasing phone
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

//handle  for back pack of phone
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false);

})