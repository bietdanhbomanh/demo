let login = document.querySelector('.nav__item--login');
let register = document.querySelector('.nav__item--resgister');
let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal__overlay');
register.onclick = function() {
    modal.classList.add('modal--on')
    modal.classList.remove('login--on')

}

modalOverlay.onclick = function() {
    modal.classList.remove('modal--on')
    
    
}


login.onclick = function() {
    modal.classList.add('login--on')
    modal.classList.add('modal--on')
}




let a = document.querySelector('.header__search');
let b = a.querySelector('.search-history');

// let b = document.querySelector('.search-history'); //error



b.onmousedown = function (params) {
    params.preventDefault(); 
}


