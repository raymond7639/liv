var button = document.querySelector("h1")
var bdy = document.querySelector('body')
button.addEventListener('click',function () {
    ran1 = Math.floor(Math.random()*100);
    ran2 = Math.floor(Math.random()*100);
    ran3 = Math.floor(Math.random()*100);
    ran4 = Math.floor(Math.random()*100);
    
    
    img0= document.createElement('img');
    img0.setAttribute('src',"https://pnglove.com/data/img/865_TPBd.jpg")
    img0.style.height = '100px'
    img0.style.position = 'absolute'
    img0.style.left = ran1 + "%"
    img0.style.right = ran2 + "%"
    img0.style.top = ran3 + "%"
    img0.style.bottom = ran4 + "%"
    
    bdy.appendChild(img0)

})
// 1. Make a Instagram Like feature(old) with dblclick
// event and setTimeout

// 2. Make custom cursor feature with the help of
// mousemove, mouseenter and mouseleave

// 3. when you scroll down Navigation bar goes up and
// desappear and when you scroll up it comes back