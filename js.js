let login = document.querySelector('.login-photo');
let form = document.querySelector('.form');


login.addEventListener('click', (event) =>{
    login.classList.add('display-none');
    form.classList.add('display-block');
})