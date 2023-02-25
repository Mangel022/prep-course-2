function sumar(num){
   if(num > 0 && num < 1){
      return false;
   }else if(num >= 0 || num <= -1){
      return true;
   }else{
      return false;
   }
}


function hola(string1, string2){
    return string1.length + ' - ' + string2.length;
}

var numero = 123
console.log(numero.toString().length)

var numero1 = 20
console.log(numero1.length)