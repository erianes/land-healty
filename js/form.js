const stringEmpety = "";
const contractMessageStorage = "contractMessage"; 
const contractServiceFlagStorage = "contractServiceFlag"; 

$("#phone").mask("(00) 00000-0000");

let contractServiceFlag = localStorage.getItem(contractServiceFlagStorage);
let formOffsetContract =  $("#contact").offset().top;
let inputTextArea = $(".inputs__input-pattern text-area required-input");
let inputClassErro = "input-error"
let sendButton = $("#send");
let form = $("#contact");
let requiredInput = $(".required-input");
let htmlErrorField = `<span class="required-field-message">Campo obrigatório!</span>`;
let sendData = {};

sendButton.click(() => {
    getDataForm(sendData);
    validateField();
});

function runScroll() {
    $("html, body").animate({
        scrollTop: formOffsetContract - navHeight
    });
}

function getDataForm(object) {
    $.each(form.serializeArray(), (i, field) => {
        object[field.name] = field.value;
    });

    return object = object;
}

function validateField() {
    $.each(requiredInput, (i, element) => {
        element.value == stringEmpety ? controlError(true, element) : controlError(false, element);
    });
}

function controlError(status, element) {
    let inputTarget =   $(element);
    let fieldsetTarget = $(element).parent().find(".required-field-message");

    fieldsetTarget.remove();
    
    if(status) {
        inputTarget.addClass(inputClassErro);
        inputTarget.parent().append(htmlErrorField);
        return status;
    }else {
        inputTarget.removeClass(inputClassErro);
        fieldsetTarget.remove();
        return status;
    }
}

function verifyServiceContract() {
    debugger;
    if(contractServiceFlag == 0) {
        localStorage.setItem(contractServiceFlagStorage, 1);
        let messageContract = localStorage.getItem(contractMessageStorage);

        if(messageContract != null) {
            textArea.val(messageContract);
            textArea.focus();
    
            setTimeout(() => {
                runScroll();
            }, 1500)
    
            return true;
        } 
    }
    
    localStorage.removeItem(contractMessageStorage);
}

$(document).ready(verifyServiceContract);