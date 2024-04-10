let open_eye = document.getElementById("visible")
let close_eye = document.getElementById("not-visible")
let login_password = document.getElementById("password")
let pass_visible= false
open_eye.addEventListener('click',()=>{
	if(!pass_visible){
		login_password.type = 'text'
		pass_visible = true
        open_eye.style.display = 'none'
        close_eye.style.display = 'block'
	}
	else{
		login_password.type = 'password'
		pass_visible= false
	}
})

close_eye.addEventListener('click',()=>{
    if(pass_visible){
        login_password.type = 'password'
        pass_visible = false
        open_eye.style.display = 'block'
        close_eye.style.display = 'none'
    }
    else{
        login_password.type = 'text'
        pass_visible = true
    }
})