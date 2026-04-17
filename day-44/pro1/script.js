var img = document.querySelector('img');
var heart = document.querySelector('svg');

img.addEventListener('dblclick',function () {
    heart.style.transform = 'translate(-50% ,-50%) scale(1)';
    heart.style.opacity = '.8';
    console.log('running');
    
    heart.style.fill = 'red';
    setTimeout(() => {
        heart.style.opacity =0 ;
        
    }, 1000);
    setTimeout(() => {
        heart.style.transform = 'translate(-50% ,-50%) scale(0)';
        
    }, 2000);
    
})