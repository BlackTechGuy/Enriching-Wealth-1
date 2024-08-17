window.addEventListener('scroll', function(){
    var header = document.getElementById('h1');
    header.classList.toggle('sticky', window.scrollY >0);
});