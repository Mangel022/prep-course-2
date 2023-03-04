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

var usiarios =
   [
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
   ]

function premium(objeto){
   for(let i = 0; i < objeto.length; i++){
      console.log(objeto[i].esPremium = true)
   }
}

//premium(usiarios);



var usuer = {
   usernombre: 'Jhon Doe',
   password: 'JavaScript es genial!',
   posts: [
      {
         id: '1',
         title: 'Aventuras en JS!',
         likes: 10,
      },
      {
         id: '2',
         title: 'Soy Henry!',
         likes: 100,
      },
      {
         id: '3',
         title: 'Qué es un JavaScript?',
         likes: 35,
      },
      {
         id: '4',
         title: 'JS Objects for Dummies',
         likes: 42,
      },
      {
         id: '5',
         title: 'Educación online',
         likes: 99,
      },
   ],
};

usuer.posts.forEach(element => {
   console.log(element);
});

var sumar = 0;
for(let i = 0; i < usuer.posts.length; i++){
   sumar += usuer.posts[i].likes;
   //console.log(usuer.posts[i].likes);
}

//console.log("total de la suma. ",sumar)

var storeItem = {
   precio: 80,
   porcentajeDeDescuento: 0.1,
};

storeItem.porcentajeTotal = function(){
   return storeItem.precio * storeItem.porcentajeDeDescuento
}

console.log(storeItem)