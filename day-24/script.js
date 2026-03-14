function fnlimiter(fn , limit){
    let totalcalled = 0;
    return function(){
        if (totalcalled < limit) {
            totalcalled ++ ;
            fn();
        }
    }
}

let limiter = fnlimiter(function(){
    console.log('hey');
    
},4)

fnlimiter();
fnlimiter();
fnlimiter();
  fnlimiter();