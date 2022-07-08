let login = document.querySelector('.login-photo');
let form = document.querySelector('.form');
let icon = document.querySelector('.icon');
let modal = document.querySelector('.modal');
let username = document.querySelector('#username')
let password = document.querySelector('#password')

login.addEventListener('click', (event) =>{

    login.classList.add('display-none');
    login.classList.remove('defaultBlock')
    form.classList.add('display-block');
    
    username.focus();
    password.placeholder = '';
    username.placeholder = '';

    if(username.value){
        username.value = '';
    }
    if(password.value){
        password.value = '';
    }
})

icon.addEventListener('click', (event) => {
    form.classList.remove('display-block');
    login.classList.add('defaultBlock');
   
}) 

modal.addEventListener('click', (event) => {
    if(!form.contains(event.target)){
        form.classList.remove('display-block');
        login.classList.add('defaultBlock');
    }
})

// form validation
let userError = document.querySelector('.errorText');
let passError = document.querySelector('.errorText2');
let submit = document.querySelector('.login');

form.addEventListener('submit', (event) => {
    event.preventDefault();

if(!username.value.trim() || !password.value.trim()){
    username.placeholder = 'This is required field';
    password.placeholder = 'This is required field'
}else{
    form.classList.remove('display-block');
    login.classList.add('defaultBlock');
}

});
