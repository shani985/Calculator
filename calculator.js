

const buttons = document.getElementsByClassName('button');
const inputField = document.getElementById('number-input');
const infoParagrph = document.getElementById('info');




for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let inputText = '';
        switch (event.target.innerHTML) {
            case 'C':
                break;
            case '÷':
                inputText = `${inputField.value}${'/'}`;
                break;
            case 'x':
                inputText = `${inputField.value}${'*'}`;
                break;
            case '=':
                try {
                    inputText = eval(inputField.value);                    
                } catch (error) {
                    inputText = ' ';
                    infoParagrph.style.display = 'block';
                    infoParagrph.innerHTML = 'Invalid Operation';

                }
                break;
            case '←':
                inputText = inputField.value.slice(0, inputField.value.length - 1);
                break;
            default:
                inputText = `${inputField.value}${event.target.innerHTML}`;
        }
        inputField.value = inputText;
    });
}

