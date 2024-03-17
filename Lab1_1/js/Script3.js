const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const ID = document.getElementById('ID')
const ZIP = document.getElementById('ZIP')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

/*check if the requirements are true*/
form.addEventListener('submit', (e) => {
    let messages = []
    if (fname.value == "") {
        messages.push('First name is required.')
    }
    if(lname.value == "") {
        messages.push('Last name is required.')
    }
    if(ID.value == "") {
        messages.push('ID is required')
    }
    if(ZIP.value == "") {
        messages.push('ZIP code is required')
    }
    if(email.value == "") {
        messages.push('email is required')
    }
    if(phone.value == "") {
        messages.push('phone number is required')
    }
    if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join ('\r\n')
    }
})

/*Same as delivery adress*/
function myFunction() {
var checkBox = document.getElementById("same")
var textShip = document.getElementById("textbox")
var textBil = document.getElementById("BillingAd")
if (checkBox.checked == true) {
textBil.value=textShip.value;
} else {
textBil.value="";
}
}
