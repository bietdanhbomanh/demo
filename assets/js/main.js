let login = document.querySelector('.nav__item--login');
let register = document.querySelector('.nav__item--register');
let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal__overlay');
let historySearch = document.querySelectorAll('.search-history');
let switchForm = document.querySelectorAll('.authen-form__switch-btn');
let registerFrom = document.querySelector('.register-form');
let loginForm = document.querySelector('.login-form');

register.onclick = function() {
    modal.classList.add('modal--on');
    modal.classList.remove('login--on');
    registerFrom.style.display = 'block';
    loginForm.style.display = 'none';
    registerFrom.style.backgroundColor = 'pink';


}

modalOverlay.onclick = function() {
    modal.classList.remove('modal--on')
    
}


login.onclick = function() {
    modal.classList.add('login--on')
    modal.classList.add('modal--on')
    registerFrom.style.display = 'none';
    loginForm.style.display = 'block';
}

for(ele of historySearch) {
    ele.onmousedown = function (e) {
        e.preventDefault();        
    }
}

switchForm[0].onclick = function () {
    registerFrom.style.display = 'none';
    loginForm.style.display = 'block';
}

switchForm[1].onclick = function () {
    registerFrom.style.display = 'block';
    loginForm.style.display = 'none';
}

