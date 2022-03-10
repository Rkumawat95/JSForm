//console.log('this is project 4');

const name1 = document.getElementById('name1');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let a=false;
let b= false;
let c=false;

$('#success').hide();
$('#failure').hide();

name1.addEventListener('blur',()=>{
    console.log('name is bluered');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name1.value;
    if(regex.test(str)){
        console.log('it matched');
        a=true;
        name1.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        name1.classList.add('is-invalid');
    }
})

email.addEventListener('blur',()=>{
    console.log('email is blured');

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        console.log('it matched');
        b=true;
        email.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        email.classList.add('is-invalid');
    }
    
})


phone.addEventListener('blur',()=>{
    console.log('phone is bluered');
    
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if(regex.test(str)){
        console.log('it matched');
        c=true;
        phone.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        phone.classList.add('is-invalid');
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{

    e.preventDefault();
    if(a & b & c)
    {
        console.log('submit your form');
        let success =  document.getElementById('success');
        success.classList.add('show');
        //failure.classList.remove('show');
        //$('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('not submit your form');
        let failure =  document.getElementById('failure');
        failure.classList.add('show');
        //success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }
    
})