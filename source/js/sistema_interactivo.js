//Interactive System Logic

//Firstly we declare all variable (name, age, botton execution and the result)
const name = document.getElementById("name");
const age = document.getElementById("age");
const button = document.getElementById("buttonExecute");
const result = document.getElementById("result");

//Then, we write an event and the possible consecuences
button.addEventListener('click', function (){

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value

    let message
    if (age < 18 && age >0){
        message= "you are a teen. ¡Keep learning programming and never give up!" //If the user has less than 18 years old, the page will shows us this message.
    }else if(age>=18){
        message= "¡Congratulations, you are a good software developer! Find great jobs opportunities."// if the user has more than 18 years old, the page 
                                                                                                     // will shows us this message.
    }else{
        message= "this is not a valid data" //If the user introduce a not valid data, the page will show him the respective message.
    }
    result.textContent = `Hey ${name}, ${message}`;

})