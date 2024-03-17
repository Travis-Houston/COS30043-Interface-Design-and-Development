const aname = document.getElementById('aname')
const pwd1 = document.getElementById('pwd1')
const pwd2 = document.getElementById('pwd2')
const email = document.getElementById('email')
const male = document.getElementById('male')
const female = document.getElementById('female')
const policy = document.getElementById('policy')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
 /*check for requirements*/
form.addEventListener('submit', (e) => {
    let messages = []
    if (aname.value == "") {
        messages.push('username is required')
    }
    if (pwd1.value == "") {
        messages.push('password is required')
    }
    if (email.value == ""){
        messages.push('email is required')
    }
    if (pwd1 != pwd2) {
		messages.push("Passwords do not match.")
	}
    

    if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join ('\r\n')
    }
})