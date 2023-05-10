const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');
    bar.onclick = function() {
     nav.classList.toggle('active')
}
if (close){
    close.addEventListener ('click', () =>{
        nav.classList.remove('active');
    })
}
// cart working js
if (document.readyState== "loading") {
    document.addEventListener("DOMContentLoaded" , ready);
} else {
    ready();
}
//marking function
function ready(){
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName ('close-cart')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++ ){
        var button = removeCartButtons[i]
        button.addEventListener("click" , removeCartItem)
    }
}
//reomve items from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}