let countValue=document.querySelector('#counter');

//increament

// function increment(){
//     let value=parseInt(countValue.innerText);

//     value=value+1;  

//     countValue.innerText=value;
// }


// function decrement(){
//     let value=parseInt(countValue.innerText);

//     value=value-1;  

//     countValue.innerText=value;
// }

let inc=document.querySelector('#incr');

inc.addEventListener('click',function(){
    let value=parseInt(countValue.innerText);

    value=value+1;  

    countValue.innerText=value;


});


let dec=document.querySelector('#decr');
dec.addEventListener('click',function(){
    let value=parseInt(countValue.innerText);

    value=value-1;  

    countValue.innerText=value;


});
