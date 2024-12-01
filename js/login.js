function changePasswordVisibility() {
    let inputPass = document.getElementById('senha_log')
    let btnShowPassword = document.getElementById('btn-senha')

    if (inputPass.type === 'password') {
    inputPass.setAttribute('type','text')
    btnShowPassword.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
        inputPass.setAttribute('type','password')
        btnShowPassword.classList.replace('fa-eye-slash', 'fa-eye')
    }
}