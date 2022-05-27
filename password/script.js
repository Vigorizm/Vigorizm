var input = document.querySelector('#input');

var random = document.querySelector('#random');

var array = ['abuse','adult','apple','agent','fault','force','frame','floor','event','earth','dance','class','claim','guide','green','heart','image','level','light','money','other','phone','price','sound','speed','stone','track','truth','waste','water','world','sugar']

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
document.getElementById('random').innerHTML = makeid(5);

input.addEventListener("keydown", function(e) {
if(input.value.toLowerCase() + e.key == random.innerHTML.toLowerCase() ){
    
    setTimeout(() => {
        input.value = '';
    }, 111);
    random.innerHTML = makeid(5);
}
   
})
