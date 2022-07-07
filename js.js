let login = document.querySelector('.login-photo');
let form = document.querySelector('.form');
let icon = document.querySelector('.icon');

login.addEventListener('click', (event) =>{
    login.classList.add('display-none');
    form.classList.add('display-block');
})

icon.addEventListener('click', (event) => {
    form.classList.remove('display-block');
}) 