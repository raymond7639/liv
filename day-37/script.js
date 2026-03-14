
var btn = document.querySelector('button');
var box = document.getElementById('box');
var bdy = document.querySelector('body');

function changeStyle() {
    c1 = Math.floor(Math.random() * (256))
    c2 = Math.floor(Math.random() * (256))
    c3 = Math.floor(Math.random() * (256))

    d1 = Math.floor(Math.random() * (256))
    d2 = Math.floor(Math.random() * (256))
    d3 = Math.floor(Math.random() * (256))
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    console.log(bdy);
    
    bdy.style.backgroundColor = `rgb(${d1},${d2},${d3})`;

}
btn.addEventListener('click',changeStyle)
