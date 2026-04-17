cur = document.querySelector('#cursor')
console.log(cur);
const box = document.getElementById("myBox");
body = document.querySelector('body')
var h1 = document.querySelector('h1');
console.log(h1);


body.addEventListener("mousemove", function (e) {
    
    
    
    cur.style.left = (e.pageX -10) + 'px'; 
    cur.style.top = (e.pageY-10) + 'px';
});


h1.addEventListener("mouseenter", function () {
    
    h1.style.transform = 'scale(1.2)';
  
});
h1.addEventListener("mouseleave", function () {
    
    h1.style.transform = 'scale(1)';
  
});


