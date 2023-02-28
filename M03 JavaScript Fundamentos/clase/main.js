var numero = 'hola'


function encuentrame(){
   if(Object.entries(arguments).length === 0){
      return 0;
   }else{
      var multiplicar = 1;
      for(let i = 0; i < arguments.length; i++){
         multiplicar = multiplicar * arguments[i];
      }
      return multiplicar
   }
}


function recibopalabras(string){
   var letra = string.split('');

   var encontrado = letra.includes('p');

   return encontrado
}

/* console.log(recibopalabras('hola'))

console.log(encuentrame());
console.log(encuentrame(5,5));
console.log(encuentrame(3, 3, 3, 3)); */


/* function argumentos(){
   var multiplica = 1;
   console.log(arguments.length); //length longitud
   for(let i = 0; i < arguments.length; i++){
      console.log(arguments[i])
      multiplica = multiplica * arguments[i]
   }
   return multiplica
}

console.log(argumentos(1,2,3,4)); //-> llamada */


