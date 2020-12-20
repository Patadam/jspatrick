// Opens the user menu
document.querySelector('.user-icon').addEventListener('click', e => {
    console.log(e)
    document.querySelector('.user-menu').classList.remove('hidden');
    document.querySelector('.user-menu').style.left = (e.target.offsetLeft + 'px');
    document.querySelector('.user-menu').style.top = (e.target.offsetHeight + 'px');
});


document.body.addEventListener('click', e => {
    if (e.target != document.querySelector('.user-icon') && e.target != document.querySelector('.user-menu')) {
        document.querySelector('.user-menu').classList.add('hidden')
    }
});