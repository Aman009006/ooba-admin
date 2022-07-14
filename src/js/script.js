function show_hide_password(target){
	let input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


const login = document.getElementById('login-input')
const password = document.getElementById('password-input')
const submit = document.getElementById('submit')

function validate(){
    if(login.value && password.value){
        submit.classList.add('active')
    }else{
        submit.classList.remove('active')
    }
}

