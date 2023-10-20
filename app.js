

const input=document.querySelector('#inputs')

const number=document.querySelector('.box')

const btn=document.querySelector('#btn')

btn.addEventListener('click',()=>{
    
    const value=input.value;

    const box=document.createElement('h2')

    var isprime=true;

    for(let i=2;i<value;i++){
        
        if(value%i===0){
            isprime=false;
        }
    }
    
    if(isprime==true){
        box.innerHTML=value+ " is prime number"
    }
    else{
        box.innerHTML=value + ' is not prime number'
    }

    number.appendChild(box)


    input.value=''    
    
    setTimeout(()=>{
        box.remove();
    },2000)
    


    
})




