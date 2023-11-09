function validateForm(){
    const requiredBlocks = document.querySelectorAll('.required');
    const inputValues = {};

    for (let i = 0; i < requiredBlocks.length; i++){
        const item = requiredBlocks[i];
        const inputElement = item.querySelector('input');
        const inputValue = inputElement.value;

        if(!inputValue){
            item.querySelector('.error').style.display = 'block';
            return false;
        }
        inputValues[inputElement.name] = inputValue;
    }

    let alertMessage = "Значения введенных полей:\n";
    for(const fieldName in inputValues){
        alertMessage += fieldName + ": " + inputValues[fieldName] + "\n";
    }

    alert(alertMessage);
    return true;
    
}

function hideError(inputElement){
    inputElement.parentNode.querySelector('.error').style.display = 'none';
}