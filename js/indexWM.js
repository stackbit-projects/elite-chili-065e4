console.log("Your index.js file is loaded correctly!");
$('#dOB').click(function(){
    $('#deliveryOption').css("display", "block");
});
$('#sAB').click(function(){
    $('#shippingAddress').css("display", "block");
});
$('#pMB').click(function(){
    $('#paymentMethod').css("display", "block");
    $('.cOB').removeClass("disabled");
});
$('.sPUR').click(function(){
    $('.homeShip').css("display", "none");
});
$('.sTHR').click(function(){
    $('.homeShip').css("display", "flex");
});
$('#billCheck').click(function(){
    $('.billForm').toggleClass("hidden");
});

$('#bAB').click(function(){
    $('#billingAddress').css("display", "block");
});
