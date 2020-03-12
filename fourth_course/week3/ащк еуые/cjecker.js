1 var button = document.querySelector('button');
2
3 button.addEventListener('click', function(event) {
    4 console.log(this, event);
    5 });