let input=document.querySelector('.input').value;
let reg=/^([+-]|0)(\d|\d\d)\C$/;

let str = '05C';
console.log(reg.test(str));