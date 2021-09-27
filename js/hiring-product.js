const hiringMonth = "hiring-month";
const textMessageMonth = "Desejo criar um site profissional por serviço mensal."
const textMessagePurchased = "Desejo criar um site profissional por compra do site."
const navHeight = 70;

let textArea = $(".text-area ");
let buttonPurchase = $(".price-button");
let formOffset =  $("#contact").offset().top;

function runScroll() {
    $("html, body").animate({
        scrollTop: formOffset - navHeight
    });
}

function setFormPurchase(isMonth) {
    runScroll();

    let text = isMonth ? textMessageMonth : textMessagePurchased;

    textArea.val("");
    textArea.focus();
    textArea.val(text);
}

buttonPurchase.click((button) => {
    event.preventDefault();
    let typePurchase = $(button.target).attr("id");

    hiringMonth == typePurchase ? setFormPurchase(true) : setFormPurchase(false);

});