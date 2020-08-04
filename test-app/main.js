
let reg=/^[+-](\d|\d\d)C$/;
let button=document.querySelector('.button');
let out=document.querySelector('.out');
//^[+-](\d|\d\d)C$


// let str = '+5C';
// console.log(reg.test(str));
button.onclick=function(){
    let input=document.querySelector('.input').value;
    if(reg.test(input)===true){
        let tempValue=Number.parseInt(input);
        if (-50<tempValue&&tempValue<-1){
            out.innerHTML='It’s super cold today. Be sure you dressed well!';
        }
        else if (0<=tempValue&&tempValue<=10){
            out.innerHTML='It’s windy outside, but we are sure you will enjoy your day!';
        }
        else if (11<=tempValue&&tempValue<=30){
            out.innerHTML='It’s time for outdoor walking!';
        }
        else if (31<=tempValue&&tempValue<=40){
            out.innerHTML='It’s so hot outside!';
        }
        else if (41<=tempValue&&tempValue<=50){
            out.innerHTML='Welcome to hell!';
        }
        else{
            out.innerHTML='Please re-check results in 5 mins';
        }
    }
    else{
        out.innerHTML='Not a temperature';
    }
}
