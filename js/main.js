const searchEL = document.querySelector('.search');
const searchInputEl = searchEL.querySelector('input');

searchEL.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
    searchEL.classList.add('focused');
    searchInputEl.setAttribute('placeholder', 'search...');
});

searchInputEl.addEventListener('blur',function () {
    searchEL.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})