const userInput = document.querySelector('#userInput');
const passwordInput = document.querySelector('#passwordInput');


input.addEventListener("keydown", function(e) {
    if(userInput.value() + e.key){     
        setTimeout(() => {
            input.value = '';
        }, 111);
    }
})

if (input == 'ss') {
alert('hello');
}