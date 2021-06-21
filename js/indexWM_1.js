console.log("Your index.js file is loaded correctly!");

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
    $('.billForm').css("display", "flex");
});
$('.sTHR').click(function(){
    $('.dOB').addClass("homeDel") .removeClass("storePick");
});
$('.sPUR').click(function(){
    $('.dOB').addClass("storePick") .removeClass("homeDel");
});
$('.homeDel').click(function(){
    $('#deliveryOption').css("display", "block");
});